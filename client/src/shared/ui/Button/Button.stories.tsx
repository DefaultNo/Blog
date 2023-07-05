import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Button',
  component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  // decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children: 'Test Button',
    theme: ThemeButton.PRIMARY
  }
}

export const Blue: Story = {
  // decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children: 'Blue Button',
    theme: ThemeButton.BLUE
  }
}

export const BlueLoader: Story = {
  // decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children: 'Loader Button',
    theme: ThemeButton.BLUE,
    loader: true
  }
}
