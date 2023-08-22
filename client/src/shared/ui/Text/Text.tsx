import cls from './Text.module.scss'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import { type FC, createElement } from 'react'
import { type TextSize, type TextType, type TextLH, type TextTheme, type TextAlign, type TextFW } from './types'

interface TextSX {
    size?: TextSize
    lineHeight?: TextLH
    fontWeight?: TextFW
}

interface TextProps {
    className?: string
    sx?: TextSX
    theme?: TextTheme
    type?: TextType
    position?: TextAlign
}

export const Text: FC<TextProps> = (props) => {
    const {
        className,
        children,
        theme,
        position,
        sx = {},
        type = 'div'
    } = props

    const {
        size,
        lineHeight,
        fontWeight
    } = sx

    const mods: Mods = {
        ...(theme && { [cls[theme]]: true }),
        ...(position && { [cls[position]]: true }),
        ...(size && { [cls[size]]: true }),
        ...(lineHeight && { [cls[lineHeight]]: true }),
        ...(fontWeight && { [cls[`fw-${fontWeight}`]]: true })
    }

    const createText = () => {
        return createElement(type, { className: classNames(cls.Text, mods, [className]) }, children)
    }

    return (
        <>
            {createText()}
        </>
    )
}
