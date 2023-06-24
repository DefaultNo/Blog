import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
    
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button:FC<ButtonProps> = (props) => {
    const {
        children, 
        className,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames('Button', {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
