import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react'

export enum ThemeButton {
    PRIMARY = 'primary',
    BLUE = 'blue',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
    disabled?: boolean
    loader?: boolean // Добавляет Loader
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        className,
        theme,
        disabled,
        loader,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [cls.disabled]: disabled
    }

    return (
        <div className={cls.ButtonWrapper}>
            <button
                className={classNames(cls.Button, mods, [className, cls[theme]])}
                disabled={disabled}
                {...otherProps}
            >
                {loader && <span className={cls.loader}></span>}
                {children}
            </button>
        </div>

    )
})
