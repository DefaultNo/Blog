import { type ReducersMapObject, configureStore, type CombinedState, type Reducer } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'

import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { $api } from 'shared/api/api'
import { type To, type NavigateOptions } from 'react-router-dom'

export function createReduxStore (
    initialState: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({ // Добавлена функция API, NAVIGATE, которую можно вызвать из thunkApi, в функции createAsycnThunk (Example: loginByUsername)
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate
                }
            }
        })
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}

// Тип функции dispatch
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
