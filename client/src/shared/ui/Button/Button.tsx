import cls from './Button.module.scss'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Ripple } from '../Ripple/Ripple'

export enum ThemeButton {
    PRIMARY = 'primary',
    TEXT = 'text',
    CANCEL = 'cancel'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
    disabled?: boolean
    loader?: boolean
    children?: ReactNode
    disableRipple?: boolean
}

export const Button = (props: ButtonProps) => {
    const {
        children,
        className,
        theme,
        disabled,
        loader,
        disableRipple,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.disabled]: disabled
    }

    const isTheme = theme ? cls[theme] : undefined

    return (
        <div className={classNames(cls.ButtonWrapper, mods, [className, isTheme])}>
            <button
                className={cls.Button}
                disabled={disabled}
                {...otherProps}
            >
                {loader && <span className={cls.loader}></span>}
                {children}
                {!disableRipple && <Ripple color={'var(--primary-color)'} />}
            </button>
        </div>

    )
}
