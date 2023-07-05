import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Burger.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

interface BurgerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    collapsed: boolean
}

export const Burger: FC<BurgerProps> = (props) => {
    const { className, collapsed, ...otherProps } = props

    return (
        <button {...otherProps} className={classNames(cls.Burger, { [cls.collapsed]: collapsed }, [])}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}
