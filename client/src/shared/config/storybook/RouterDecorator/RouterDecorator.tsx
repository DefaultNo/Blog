import { type StoryFn } from '@storybook/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const RouterDecorator = (Story: StoryFn) => {
    return (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    )
}
