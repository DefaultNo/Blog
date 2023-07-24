import { type Country, type Currency } from 'shared/const/common'

// Типы для страницы профиля
export interface Profile {
    'name': string
    'lastname': string
    'age': string
    'currency': Currency
    'country': Country
    'city': string
    'username': string
    'avatar': string
}

// Типы для профиля в STATE
export interface ProfileSchema {
    data?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
}
