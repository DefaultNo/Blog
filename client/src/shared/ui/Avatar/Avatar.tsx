import { type CSSProperties, useMemo } from 'react'
import cls from './Avatar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface AvatarProps {
    className?: string
    src?: string
    alt?: string
    size?: string
}

export const Avatar = (props: AvatarProps) => {
    const {
            className,
            src,
            alt,
            size
        } = props

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size || '100%',
            height: size || '100%',
            flexBasis: size || '100%'
        }
    }, [size])

    return (
        <div style={styles} className={classNames(cls.Avatar, {}, [className])}>
            <img src={src} alt={alt} />
        </div>
    )
}
