import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ProfileCard } from './ProfileCard'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    args: {
        data: {
            name: 'Алексей',
            lastname: '32erwc',
            age: 32,
            currency: Currency.UAH,
            country: Country.USA,
            city: 'Kiev',
            username: 'Dven123',
            avatar: '#'
        }
    }
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DEFAULT)]
}

export const Dark: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const WithLoading: Story = {
    args: {
        isLoading: true
    }
}
