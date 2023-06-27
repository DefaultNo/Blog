import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'widget/Loader',
    component: Loader
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const LightLoader: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DEFAULT)]
}

export const DarkLoader: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}
