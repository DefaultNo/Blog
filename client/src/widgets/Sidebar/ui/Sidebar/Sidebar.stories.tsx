import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DEFAULT), RouterDecorator]
}
export const Dark: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK), RouterDecorator]
}
