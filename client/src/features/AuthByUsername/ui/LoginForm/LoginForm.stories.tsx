import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [StoreDecorator({
    loginForm: { username: '', password: '' }
  })],
  args: {}
}

export const WithError: Story = {
  decorators: [StoreDecorator({
    loginForm: { username: '', password: '', error: 'Some ERROR' }
  })],
  args: {}
}

export const Loading: Story = {
  decorators: [StoreDecorator({
    loginForm: { isLoading: true }
  })],
  args: {}
}
