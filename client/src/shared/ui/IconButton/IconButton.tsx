import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './IconButton.module.scss'
import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Ripple } from '../Ripple/Ripple'

export type IconButtonSize = 'small' | 'medium' | 'large'

export enum IBTheme {
    PRIMARY = 'primary',
    BORDER = 'border'
}

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children?: ReactNode
    theme?: IBTheme
    size?: IconButtonSize
    disableRipple?: boolean
    selected?: boolean
}

export const IconButton = (props: IconButtonProps) => {
    const {
        children,
        className,
        theme,
        size,
        disableRipple,
        selected,
        ...otherProps
    } = props

    const mods: Mods = {
        ...(size && { [cls[size]]: true }),
        [cls.selected]: selected
    }

    const isTheme = theme ? cls[theme] : undefined

    return (
        <div className={classNames(cls.IconButtonWrapper, mods, [className, isTheme])}>
            <button
                className={cls.IconButton}
                type='button'
                {...otherProps}
            >
                {children}

                {!disableRipple && <Ripple color={'var(--primary-color)'} />}
            </button>
        </div>
    )
}
