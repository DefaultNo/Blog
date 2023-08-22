import { type CSSProperties, useMemo, useState, useEffect, type FC } from 'react'
import cls from './Ripple.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface RippleItem {
    x: number
    y: number
    size: number
};

interface RippleProps {
    duration?: number
    color?: string
}

export const Ripple = (props: RippleProps) => {
    const {
        color = '#eee',
        duration = 700
    } = props

    const styles = useMemo<CSSProperties>(() => {
        return {
            backgroundColor: color,
            animationDuration: `${duration}ms`
        }
    }, [color, duration])

    const [rippleArray, setRippleArray] = useState<RippleItem[]>([])

    useEffect(() => {
        let bounce: number | undefined
        if (rippleArray.length > 0) {
            window.clearTimeout(bounce)

            bounce = window.setTimeout(() => {
                setRippleArray([])
                window.clearTimeout(bounce)
            }, duration * 1.5)
        }

        return () => { window.clearTimeout(bounce) }
    }, [duration, rippleArray.length])

    const addRipple = (e: React.MouseEvent) => {
        const rippleContainer = e.currentTarget.getBoundingClientRect()
        const size = rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height

        const x = e.clientX - rippleContainer.left - size / 2
        const y = e.clientY - rippleContainer.top - size / 2
        const newRipple = {
            x,
            y,
            size
        }

        setRippleArray([...rippleArray, newRipple])
    }

    return (
        <span onClick={addRipple} className={classNames(cls.Ripple)}>
            {
                rippleArray.length > 0 && rippleArray.map((ripple, i) => {
                    const { x, y, size } = ripple
                    const rippleStyle: CSSProperties = {
                        ...styles,
                        top: y,
                        left: x,
                        width: size,
                        height: size
                    }
                    return (
                        <span
                            key={i}
                            style={rippleStyle}
                            className={cls.effect}>
                        </span>
                    )
                })
            }
        </span>
    )
}

/*
export const Ripple: FC<RippleProps> = (props) => {
    const {
        children,
        color = '#eee',
        duration = 700
    } = props

    const styles = useMemo<CSSProperties>(() => {
        return {
            backgroundColor: color,
            animationDuration: `${duration}ms`
        }
    }, [color, duration])

    const [rippleArray, setRippleArray] = useState<RippleItem[]>([])

    useEffect(() => {
        let bounce: number | undefined
        if (rippleArray.length > 0) {
            window.clearTimeout(bounce)

            bounce = window.setTimeout(() => {
                setRippleArray([])
                window.clearTimeout(bounce)
            }, duration * 1.5)
        }

        return () => { window.clearTimeout(bounce) }
    }, [duration, rippleArray.length])

    const addRipple = (e: React.MouseEvent) => {
        const rippleContainer = e.currentTarget.getBoundingClientRect()
        const size = rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height

        const x = e.pageX - rippleContainer.left - size / 2
        const y = e.pageY - rippleContainer.top - size / 2

        const newRipple = {
            x,
            y,
            size
        }

        setRippleArray([...rippleArray, newRipple])
    }

    return (
        <span onMouseDown={addRipple} className={classNames(cls.Ripple)}>
            {children}
            {
                rippleArray.length > 0 && rippleArray.map((ripple, i) => {
                    console.log(ripple)
                    const { x, y, size } = ripple
                    const rippleStyle: CSSProperties = {
                        ...styles,
                        top: y,
                        left: x,
                        width: size,
                        height: size
                    }
                    return (
                        <span
                            key={i}
                            style={rippleStyle}
                            className={cls.effect}>
                        </span>
                    )
                })
            }
        </span>
    )
}
*/
