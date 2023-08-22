import { Currency } from 'entities/Currency/model/types/currency'
import { memo, useCallback } from 'react'
import { Select } from 'shared/ui/Select/Select'

interface CurrencySelectProps {
    className?: string
    currentValue?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

// Массив не изменяется, для не него не нужен useMemo()
const options = [
    { value: Currency.UAH, content: Currency.UAH },
    { value: Currency.KZT, content: Currency.KZT },
    { value: Currency.USD, content: Currency.USD }
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, currentValue, onChange, readonly } = props
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    return (
        <Select
            customPlaceholder='Валюта'
            options={options}
            currentValue={currentValue}
            onChange={onChangeHandler}

            readonly={readonly}
        />
    )
})
