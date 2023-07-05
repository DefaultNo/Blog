import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoryFn } from '@storybook/react'
import { StoreProvider, type StateSchema } from 'app/providers/StoreProvider'

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story: StoryFn) => {
    return (
        <StoreProvider initialState={state as any} >
            <Story />
        </StoreProvider>
    )
}
