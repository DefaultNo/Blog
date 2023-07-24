import { type ReducersMapObject, type AnyAction, type Reducer, combineReducers } from '@reduxjs/toolkit'
import { type ReducerManager, type StateSchema, type StateSchemaKey } from './StateSchema'

export function createReducerManager (initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    const reducers = { ...initialReducers } // initialReducers = {counter: ƒ, user: ƒ, ...}

    let combinedReducer = combineReducers(reducers)

    // Масив редюсеров которые хотим удалить
    let keysToRemove: StateSchemaKey[] = []

    return {
        getReducerMap: () => reducers,

        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state }

                keysToRemove.forEach((key) => {
                    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                    delete state[key]
                })
                keysToRemove = []
            }

            return combinedReducer(state, action)
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }

            reducers[key] = reducer

            combinedReducer = combineReducers(reducers)
        },

        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return
            }

            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete reducers[key]

            keysToRemove.push(key)

            combinedReducer = combineReducers(reducers)
        }
    }
}
