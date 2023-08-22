import cls from './Input.module.scss'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import { memo, type InputHTMLAttributes, useState, useEffect, useRef } from 'react'
import Lock from '../../assets/icons/common/Lock.svg'

/*
    Omit выдает свойства и из первого аргумента (<InputHTMLAttributes<HTMLInputElement>)
    и исключает свойства из второго аргумента (value, onChange)
*/

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

export enum ThemeInput {
    DEFAULT = 'default',
    PRIMARY = 'primary',
    BORDER = 'border'
}

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    autofocus?: boolean
    customPlaceholder?: string
    theme?: ThemeInput
    readonly?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        autofocus,
        customPlaceholder,
        theme = ThemeInput.DEFAULT,
        readonly,
        ...otherProps
    } = props

    // Фокус на input
    const [isFocus, setIsFocused] = useState(false)
    // Наличие значения в input
    const [isValue, setIsValue] = useState(false)

    const ref = useRef<HTMLInputElement>(null)

    const onFocus = () => {
        setIsFocused(true)
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    // Изменение value
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        if (e.target.value) {
            setIsValue(true)
        } else {
            setIsValue(false)
        }
    }

    useEffect(() => {
        // Autofocus при открытии, если autofocus = true
        if (autofocus) {
            setIsFocused(true)
            ref.current?.focus()
        }
        // При загрузке страницы, при наличии value - добавлять active
        if (value) {
            setIsValue(true)
        }
    }, [autofocus, value])

    const mods: Mods = {
        [cls.focus]: isFocus,
        [cls.readonly]: readonly,
        [cls.active]: isValue
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
                readOnly={readonly}
                {...otherProps}
            />
            {
                readonly ? <span className={cls.lock}><Lock /></span> : null
            }
            {
                customPlaceholder ? <span className={cls.customPlaceholder}>{customPlaceholder}</span> : null
            }
        </div>
    )
})
