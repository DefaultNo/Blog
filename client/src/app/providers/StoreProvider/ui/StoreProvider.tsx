/*
    Store-Provider - возвращает обертку <Provider></Provider>, необходима для передачи данных из
    redux (store)
*/

import { type ReactNode } from 'react'
import { Provider } from 'react-redux'

import { type StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'
import { type ReducersMapObject, type DeepPartial } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateSchema
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers
    } = props

    const navigate = useNavigate()

    const store = createReduxStore(
        initialState,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate
    )

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
