import cls from './Code.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import Copy from 'shared/assets/icons/common/Copy.svg'
import { useCallback } from 'react'
import { Icon } from '../Icon/Icon'
import { IBTheme, IconButton } from '../IconButton/IconButton'

interface CodeProps {
    className?: string
    code: string
}

export const Code = (props: CodeProps) => {
    const {
        className,
        code
    } = props

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(code)
    }, [code])

    return (
        <div className={classNames(cls.Code, {}, [className])}>
            <IconButton theme={IBTheme.PRIMARY} className={cls.copy} onClick={onCopy} size='large'>
                <Icon size='20px' Svg={Copy} />
            </IconButton>
            <pre>
                <code className={cls.CodeEl}>
                    {code}
                </code>
            </pre>
        </div>
    )
}
