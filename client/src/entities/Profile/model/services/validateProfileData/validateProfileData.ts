import { ValidateProfileError, type Profile } from '../../types/profile'

const isEmpty = (value: string | number | undefined | null): boolean => {
    return value === undefined || value === null || value === ''
}

const isWithinLengthLimits = (value: string | undefined, minLength: number, maxLength: number): boolean => {
    if (value) {
        return value.length < minLength || value.length > maxLength
    } else {
        return false
    }
}

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA]
    }

    const { name, lastname, age, country } = profile
    const errors: ValidateProfileError[] = []

    if (isEmpty(name) || isWithinLengthLimits(name, 3, 30)) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA)
    }

    if (isEmpty(lastname) || isWithinLengthLimits(lastname, 3, 30)) {
        errors.push(ValidateProfileError.INCORRECT_LASTNAME_DATA)
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE)
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY)
    }

    return errors
}
