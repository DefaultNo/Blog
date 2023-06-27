import type { Meta, StoryObj } from '@storybook/react'
import AppLink, { AppLinkTheme } from './AppLink'
import { RouterDecorator } from '../../../shared/config/storybook/RouterDecorator/RouterDecorator'

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    decorators: [RouterDecorator],
    args: {
        to: '/'
    }
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY
    }
}

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY
    }
}
