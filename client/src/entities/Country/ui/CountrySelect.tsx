import { memo, useCallback } from 'react'
import { Select, type SelectOption } from 'shared/ui/Select/Select'
import { Country } from '../model/types/country'

import UA from '../../../shared/assets/icons/countries/UA.svg?url'
import US from '../../../shared/assets/icons/countries/US.svg?url'
import KZ from '../../../shared/assets/icons/countries/KZ.svg?url'

interface CountrySelectProps {
    className?: string
    onChange?: (value: Country) => void
    currentValue?: string
    readonly?: boolean
}

const options: SelectOption[] = [
    { value: Country.Ukraine, content: Country.Ukraine, img: UA, alt: Country.Ukraine },
    { value: Country.USA, content: Country.USA, img: US, alt: Country.USA },
    { value: Country.Kazakhstan, content: Country.Kazakhstan, img: KZ, alt: Country.Kazakhstan }
]

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        onChange,
        currentValue,
        readonly
    } = props

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return (
        <Select
            onChange={onChangeHandler}
            customPlaceholder='Страна'
            currentValue={currentValue}
            options={options}
            readonly={readonly}
        />
    )
})
