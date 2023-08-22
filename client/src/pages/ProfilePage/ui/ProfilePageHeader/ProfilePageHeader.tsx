import cls from './ProfilePageHeader.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { getProfileReadonly, profileActions, type Profile, updateProfileData, getProfileData } from 'entities/Profile'
import { useSelector } from 'react-redux'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from 'entities/User'

interface ProfilePageHeaderProps {
    className?: string
    isLoading?: boolean
    data?: Profile
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { t } = useTranslation()
    const { className, data, isLoading } = props
    const dispatch = useAppDispatch()

    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const canEdit = authData?.id === profileData?.id

    const readonly = useSelector(getProfileReadonly)
    const name = data?.name || ''

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div className={classNames(cls.ProfileHeader, {}, [className])}>
            <Text>{t('Добро пожаловать,')} {name}</Text>
            {
                canEdit && (
                    readonly
                    ? (<Button theme={ThemeButton.PRIMARY} onClick={onEdit}>{t('Редактировать профиль')}</Button>)
                    : (
                        <div className={cls.controls}>
                            <Button theme={ThemeButton.CANCEL} onClick={onCancelEdit}>{t('Отменить редактирование')}</Button>
                            <Button disabled={isLoading} loader theme={ThemeButton.PRIMARY} onClick={onSave}>{t('Сохранить')}</Button>
                        </div>
                     )
                )
            }
        </div>
    )
}
