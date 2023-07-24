import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { memo, useCallback, useState } from 'react'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
    className?: string
}

const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    // Если пользователь авторизован - отображать меню другого формата
    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <div className={cls.links}>
                    <Button onClick={onLogout} theme={ThemeButton.PRIMARY}>{t('Выйти')}</Button>
                    <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                </div>
            </div>
        )
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <Button onClick={onOpenModal} theme={ThemeButton.BLUE}>{t('Войти')}</Button>
                {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
            </div>
        </div>
    )
})

export default Navbar
