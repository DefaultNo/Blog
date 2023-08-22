import cls from './ProfileCard.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

import { useTranslation } from 'react-i18next'

import { Text } from 'shared/ui/Text/Text'
import { Button } from 'shared/ui/Button/Button'
import { Input, ThemeInput } from 'shared/ui/Input/Input'
import { type Profile, type ValidateErrorMessages } from '../../model/types/profile'
import { PageLoader } from 'widgets/PageLoader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { type Currency, CurrencySelect } from 'entities/Currency'
import { CountrySelect, type Country } from 'entities/Country'
import { TextAlign, TextTheme } from 'shared/ui/Text/types'

interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    validateErrorMessages?: ValidateErrorMessages

    onChangeFirstName?: (value?: string) => void
    onChangeLastName?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCurrency?: (value?: Currency) => void
    onChangeCountry?: (value?: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        validateErrorMessages,

        onChangeFirstName,
        onChangeLastName,
        onChangeCity,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry
    } = props

    const { t } = useTranslation('profile')

    if (isLoading) {
        return (
            <PageLoader />
        )
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    position={TextAlign.CENTER}
                    theme={TextTheme.ERROR}>Произошла ошибка при загрузке</Text>
                <Button />
            </div>
        )
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div style={{ marginBottom: '20px' }}>
                <Avatar src='#' />
            </div>
            <div className={cls.about}>
                <div className={cls.field}>
                    <Input
                        readonly={readonly}
                        customPlaceholder='Имя'
                        theme={ThemeInput.BORDER}
                        value={data?.name}
                        onChange={onChangeFirstName}
                    />
                    {
                        validateErrorMessages?.INCORRECT_USER_DATA &&
                        <Text theme={TextTheme.ERROR}>{validateErrorMessages.INCORRECT_USER_DATA}</Text>
                    }
                </div>
                <div className={cls.field}>
                    <Input
                        readonly={readonly}
                        customPlaceholder='Фамилия'
                        theme={ThemeInput.BORDER}
                        value={data?.lastname}
                        onChange={onChangeLastName}
                    />
                    {
                        validateErrorMessages?.INCORRECT_LASTNAME_DATA &&
                        <Text theme={TextTheme.ERROR}>{validateErrorMessages.INCORRECT_LASTNAME_DATA}</Text>
                    }
                </div>
                <div className={cls.field}>
                    <Input
                        readonly={readonly}
                        customPlaceholder='Возраст'
                        theme={ThemeInput.BORDER}
                        value={data?.age}
                        onChange={onChangeAge}
                    />
                    {
                        validateErrorMessages?.INCORRECT_AGE &&
                        <Text theme={TextTheme.ERROR}>{validateErrorMessages.INCORRECT_AGE}</Text>
                    }
                </div>
                <div className={cls.field}>
                    <Input
                        readonly={readonly}
                        customPlaceholder='Город'
                        theme={ThemeInput.BORDER}
                        value={data?.city}
                        onChange={onChangeCity}
                    />
                </div>
                <div className={cls.field}>
                    <Input
                        readonly={readonly}
                        customPlaceholder='Никнейм'
                        theme={ThemeInput.BORDER}
                        value={data?.username}
                        onChange={onChangeUsername}
                    />
                </div>
                <div className={cls.field}>
                    <Input
                        readonly={readonly}
                        customPlaceholder='Аватар'
                        theme={ThemeInput.BORDER}
                        value={data?.avatar}
                        onChange={onChangeAvatar}
                    />
                </div>
                <div className={cls.field}>
                    <CurrencySelect
                        onChange={onChangeCurrency}
                        currentValue={data?.currency}
                        readonly={readonly}
                    />
                </div>
                <div className={cls.field}>
                    <CountrySelect
                        onChange={onChangeCountry}
                        currentValue={data?.country}
                        readonly={readonly}
                    />
                </div>
            </div>
        </div>
    )
}
