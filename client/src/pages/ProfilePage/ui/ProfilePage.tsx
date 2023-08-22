import cls from './ProfilePage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

import {
    ProfileCard,
    fetchProfileData,
    profileReducer,

    getProfileData,
    getProfileError,
    getProfileIsLoading,
    profileActions,
    getProfileReadonly,
    getProfileForm,
    getProfileValidateErrors,
    ValidateProfileError
} from 'entities/Profile'

import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { type ValidateErrorMessages } from 'entities/Profile/model/types/profile'
import { useParams } from 'react-router-dom'

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props
    const { t } = useTranslation('profile')

    const { id } = useParams<{ id: string }>()

    const data = useSelector(getProfileData)
    const formData = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)
    const validateErrors = useSelector(getProfileValidateErrors)

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка'),
        [ValidateProfileError.NO_DATA]: t('Осустствуют данные'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя должно состоять из не менее 6 и не более 30 символов'),
        [ValidateProfileError.INCORRECT_LASTNAME_DATA]: t('Фамилия должна состоять из не менее 2 и не более 30 символов'),
        [ValidateProfileError.INCORRECT_AGE]: t('Возраст должен быть не менее 10 и не более 100 лет'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Не указана страна')
    }

    const validateErrorMessages: ValidateErrorMessages = {
        [ValidateProfileError.SERVER_ERROR]: validateErrors?.includes(ValidateProfileError.SERVER_ERROR) ? validateErrorTranslates[ValidateProfileError.SERVER_ERROR] : undefined,

        [ValidateProfileError.NO_DATA]: validateErrors?.includes(ValidateProfileError.NO_DATA) ? validateErrorTranslates[ValidateProfileError.NO_DATA] : undefined,

        [ValidateProfileError.INCORRECT_USER_DATA]: validateErrors?.includes(ValidateProfileError.INCORRECT_USER_DATA) ? validateErrorTranslates[ValidateProfileError.INCORRECT_USER_DATA] : undefined,

        [ValidateProfileError.INCORRECT_LASTNAME_DATA]: validateErrors?.includes(ValidateProfileError.INCORRECT_LASTNAME_DATA) ? validateErrorTranslates[ValidateProfileError.INCORRECT_LASTNAME_DATA] : undefined,

        [ValidateProfileError.INCORRECT_AGE]: validateErrors?.includes(ValidateProfileError.INCORRECT_AGE) ? validateErrorTranslates[ValidateProfileError.INCORRECT_AGE] : undefined,

        [ValidateProfileError.INCORRECT_COUNTRY]: validateErrors?.includes(ValidateProfileError.INCORRECT_COUNTRY) ? validateErrorTranslates[ValidateProfileError.INCORRECT_COUNTRY] : undefined
    }

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id))
        }
    }, [dispatch, id])

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ name: value || '' }))
    }, [dispatch])

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value) || 10 }))
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }))
    }, [dispatch])

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }))
    }, [dispatch])

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }))
    }, [dispatch])

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }))
    }, [dispatch])

    const onChangeCountry = useCallback((country?: Country) => {
        const currenciesForCountries: Record<Country, Currency> = {
            [Country.Ukraine]: Currency.UAH,
            [Country.USA]: Currency.USD,
            [Country.Kazakhstan]: Currency.KZT
        }
        if (country) {
            const newCurrency = currenciesForCountries[country]
            dispatch(profileActions.updateProfile({ currency: newCurrency, country }))
        }
    }, [dispatch])

    return (
        <DynamicModuleLoader name={'profile'} reducers={reducers}>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfilePageHeader isLoading={isLoading} data={data} />
                <ProfileCard
                    readonly={readonly}
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    validateErrorMessages={validateErrorMessages}

                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
