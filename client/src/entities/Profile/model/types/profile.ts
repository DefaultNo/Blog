import { type Currency } from 'entities/Currency'

// Типы валидиционных ошибок
export enum ValidateProfileError {
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_LASTNAME_DATA = 'INCORRECT_LASTNAME_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY'
}

export type ValidateErrorMessages = Record<ValidateProfileError, string | undefined>

// Типы для страницы профиля
export interface Profile {
    id?: string
    username?: string
    name?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: string
    city?: string
    avatar?: string
}

// Типы для профиля в STATE
export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    validateErrors?: ValidateProfileError[]
}
