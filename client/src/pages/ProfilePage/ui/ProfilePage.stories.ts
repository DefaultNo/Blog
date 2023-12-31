import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators: [ThemeDecorator(Theme.DEFAULT), StoreDecorator({}), RouterDecorator]
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
    }
}

export const Dark: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}
