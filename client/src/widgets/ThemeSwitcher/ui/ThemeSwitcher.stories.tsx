import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeSwitcher } from './ThemeSwitcher'

const meta = {
    title: 'widget/ThemeSwitcher',
    component: ThemeSwitcher
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const LightSwitcher: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DEFAULT)]
}

export const DarkSwitcher: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}
