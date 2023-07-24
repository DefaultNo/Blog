import { type LoginSchema } from 'features/AuthByUsername'
import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User'
import { type ProfileSchema } from 'entities/Profile'

import { type AnyAction, type CombinedState, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type To, type NavigateOptions } from 'react-router-dom'

// GLOBAL
export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    // Асинхронные
    loginForm?: LoginSchema
    profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema // keyof - получает ключ (counter, user, loginForm)

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate: (to: To, options?: NavigateOptions) => void
}

// T - generic, подставляется вместо T (рядом с rejectValue)
export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
}
