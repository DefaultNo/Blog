import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'

import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'

// SHARED
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input, ThemeInput } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

// PARTIAL IMPORT STATE
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginLoading } from '../../model/selectors/getLoginIsLoading/getIsLoginLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
        onSuccess
    } = props

    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginLoading)
    const error = useSelector(getLoginError)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [onSuccess, dispatch, password, username])

    return (
        <DynamicModuleLoader name='loginForm' reducers={initialReducers}>
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

                {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}

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
        </DynamicModuleLoader>
    )
})

export default LoginForm
