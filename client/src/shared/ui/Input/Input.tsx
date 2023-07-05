import cls from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo, type InputHTMLAttributes, useState, useEffect, useRef } from 'react'

/*
    Omit выдает свойства и из первого аргумента (<InputHTMLAttributes<HTMLInputElement>)
    и исключает свойства из второго аргумента (value, onChange)
*/

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export enum ThemeInput {
    PRIMARY = 'primary',
    BORDER = 'border'
}

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    autofocus?: boolean
    customPlaceholder?: string
    theme?: ThemeInput
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        autofocus,
        customPlaceholder,
        theme,
        ...otherProps
    } = props

    // Фокус на input
    const [isFocus, setIsFocused] = useState(false)

    const ref = useRef<HTMLInputElement>(null)

    const onFocus = () => {
        setIsFocused(true)
    }

    const onBlur = () => {
        // Проверка на наличие значений в input (если есть оставляет класс - focus)
        if (value) {
            return
        }
        setIsFocused(false)
    }

    // Изменение value
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    // Autofocus при открытии, если autofocus = true
    useEffect(() => {
        if (autofocus) {
            setIsFocused(true)
            ref.current?.focus()
        }
    }, [autofocus])

    const mods: Record<string, boolean> = {
        [cls.focus]: isFocus
    }

    return (
        <div className={classNames(cls.inputWrapper, mods, [className, cls[theme]])}>
            <input
                ref={ref}
                onChange={onChangeHandler}
                value={value}
                className={cls.input}
                type={type}
                onFocus={onFocus}
                onBlur={onBlur}
                {...otherProps}
            />
            {
                customPlaceholder ? <span className={cls.customPlaceholder}>{customPlaceholder}</span> : null
            }
        </div>
    )
})
