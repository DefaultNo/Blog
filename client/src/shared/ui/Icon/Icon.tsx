import cls from './Icon.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

import { type CSSProperties, memo, useMemo } from 'react'

interface IconProps {
    className?: string
    size?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        size = '16px',
        Svg
    } = props

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            flexBasis: size
        }
    }, [size])

    return (
        <div style={styles} className={classNames(cls.Icon, {}, [className])}>
            <Svg />
        </div>
    )
})
