import cls from './LoginForm.module.scss'

import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginActions } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input, ThemeInput } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
    const {
        className
    } = props

    const dispatch = useDispatch()
    const { username, password, error, isLoading } = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title='Авторизация' />

            <div className={cls.inputs}>
                <Input
                    autofocus
                    customPlaceholder={'Логин'}
                    onChange={onChangeUsername}
                    theme={ThemeInput.BORDER}
                    className={cls.loginInput}
                    value={username}
                />
                <Input
                    customPlaceholder={'Пароль'}
                    onChange={onChangePassword}
                    theme={ThemeInput.BORDER}
                    className={cls.loginInput}
                    value={password}
                />
            </div>

            {error && <Text text={error} theme={TextTheme.ERROR} />}

            <Button
                theme={ThemeButton.BLUE}
                loader={true}
                disabled={isLoading}
                onClick={onLoginClick}
                className={cls.loginBtn}
            >
                Войти
            </Button>
        </div>
    )
})
