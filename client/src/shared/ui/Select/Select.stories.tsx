import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'shared/Select',
    component: Select,
    args: {
        options: [
            { value: 'Soma Value', content: 'Some Text' },
            { value: 'UA', content: 'Ukraine' },
            { value: 'Text one', content: 'Lorem ipsum' }
        ],
        currentValue: 'Test value'
    }
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
    }
}
