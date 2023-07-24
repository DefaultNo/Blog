import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'pages/MainPage',
    component: ProfilePage
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DEFAULT)]
}

export const Dark: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}
