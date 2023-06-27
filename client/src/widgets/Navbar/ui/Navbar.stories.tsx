import type { Meta, StoryObj } from '@storybook/react'
import Navbar from './Navbar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'

const meta = {
    title: 'widget/Navbar',
    component: Navbar
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
    },
    decorators: [RouterDecorator, ThemeDecorator(Theme.DEFAULT)]
}
export const Dark: Story = {
    args: {
    },
    decorators: [RouterDecorator, ThemeDecorator(Theme.DARK)]
}
