import type { Meta, StoryObj } from '@storybook/react'
import { Input, ThemeInput } from './Input'

const meta = {
  title: 'shared/Input',
  component: Input
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Type text',
    value: 'Some text'
  }
}

export const Primary: Story = {
  args: {
    placeholder: 'Type text',
    value: 'Some text',
    theme: ThemeInput.PRIMARY
  }
}

export const CustomPlaceholder: Story = {
  args: {
    value: 'Text',
    customPlaceholder: 'Login',
    theme: ThemeInput.PRIMARY
  }
}

export const Border: Story = {
  args: {
    value: 'Text',
    customPlaceholder: 'Login',
    theme: ThemeInput.BORDER
  }
}
