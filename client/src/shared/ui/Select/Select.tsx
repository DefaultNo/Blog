import cls from './Select.module.scss'
import Arrow from '../../assets/icons/common/Arrow.svg'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'

export interface SelectOption {
    value: string
    content: string
    img?: string
    alt?: string
}

interface SelectProps {
    className?: string
    label?: string
    customPlaceholder?: string
    currentValue?: string
    options?: SelectOption[]
    onChange?: (value: string) => void

    readonly?: boolean
    hideCurrent?: boolean
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        customPlaceholder,
        currentValue,
        options,
        onChange,

        readonly,
        hideCurrent
    } = props

    const [isOpen, setIsOpen] = useState(false)
    const selectRef = useRef<HTMLDivElement>(null)

    const toggleSelect = () => {
        setIsOpen(!isOpen)
    }

    const onChangeHandler = useCallback((value: string, isSelected) => {
        if (isSelected) {
            return
        }
        setIsOpen(false)
        onChange?.(value)
    }, [onChange])

    // Если клик снаружи
    const isClickOutside = (e: MouseEvent) => {
        const target = e.target
        const currentSelect = selectRef.current

        if (currentSelect && !selectRef.current.contains(target as Node)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', isClickOutside)

        return () => {
            document.body.removeEventListener('click', isClickOutside)
        }
    }, [])

    // HTML custom placeholder
    const getPlaceholder = (customPlaceholder: string | undefined) => {
        if (customPlaceholder) {
            return (
                <span className={cls.customPlaceholder}>
                    {customPlaceholder}
                </span>
            )
        }
    }
    // HTML label
    const getLabel = (label: string | undefined) => {
        if (label) {
            return (
                <div className={cls.label}>{label}</div>
            )
        }
    }
    // HTML img
    const getImg = (img?: string, alt?: string) => {
        if (img) {
            return (
                <span className={cls.image}>
                    <img src={img} alt={alt} />
                </span>
            )
        }
    }

    const optionList = useMemo(() => {
        return options?.map(option => {
            const { value, content, img } = option
            const isCurrentOption = () => currentValue === value ? true : false

            const isSelected = isCurrentOption()
            const isHidden = hideCurrent ? isCurrentOption() : undefined

            const optionMods: Mods = {
                [cls.selected]: isSelected,
                [cls.hidden]: isHidden
            }
            return (
                <li
                    key={value}
                    value={value}
                    onClick={() => { onChangeHandler(value, isSelected) }}
                    className={classNames(cls.option, optionMods, [])}
                >
                    { getImg(img) }
                    <span className={cls['option-content']}>{content}</span>
                </li>
            )
        })
    }, [currentValue, hideCurrent, onChangeHandler, options])

    const mods: Mods = {
        [cls.open]: isOpen,
        [cls.disabled]: readonly
    }

    return (
        <div className={classNames(cls.Select, mods, [className])}>
            <div ref={selectRef} className={cls.SelectWrapper}>
                {getLabel(label)}
                <div className={cls.content}>
                    <button
                        className={cls.header}
                        type='button'
                        onClick={toggleSelect}
                    >
                        <span className={cls.controls}>
                            <span className={cls.current}>{currentValue}</span>
                        </span>

                        <span className={cls.arrow}>
                            <Arrow />
                        </span>
                        {getPlaceholder(customPlaceholder)}
                    </button>
                    <ul className={cls.list}>
                        {optionList}
                    </ul>
                </div>
            </div>
        </div>
    )
})
