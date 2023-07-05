import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'shared/Modal',
    component: Modal
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultModal: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magni laborum, neque officiis ullam necessitatibus! Beatae facere incidunt sequi facilis iste voluptas quo placeat quasi ad? Accusantium officia pariatur perspiciatis.'
    }
}

export const DarkModal: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magni laborum, neque officiis ullam necessitatibus! Beatae facere incidunt sequi facilis iste voluptas quo placeat quasi ad? Accusantium officia pariatur perspiciatis.'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}
