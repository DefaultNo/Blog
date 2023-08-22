import cls from './Skeleton.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

import { type CSSProperties } from 'react'

interface SkeletonProps {
    className?: string
    width?: string | number
    height?: string | number
    borderRadius?: string
    fontSize?: string
    ibg?: boolean
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        className,
        width = '100%',
        height = '100%',
        fontSize,
        borderRadius,
        ibg
     } = props

    const styles: CSSProperties = {
        maxWidth: width,
        height,
        borderRadius
    }

    if (fontSize) {
        styles.height = fontSize
    }

    return (
        <div style={styles} className={classNames(cls.Skeleton, { [cls.ibg]: ibg }, [className])}>
            <span></span>
        </div>
    )
}
