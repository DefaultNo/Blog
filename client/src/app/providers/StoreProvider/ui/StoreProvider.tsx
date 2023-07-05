/*
    Store-Provider - возвращает обертку <Provider></Provider>, необходима для передачи данных из
    redux (store)
*/

import { type ReactNode } from 'react'
import { Provider } from 'react-redux'

import { type StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateSchema
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState
    } = props

    const store = createReduxStore(initialState)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
