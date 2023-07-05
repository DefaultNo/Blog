import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

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
}

export const Button: FC<ButtonProps> = (props) => {
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
}
