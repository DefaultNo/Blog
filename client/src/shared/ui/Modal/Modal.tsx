import cls from './Modal.module.scss'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import { useEffect, type ReactNode, useCallback, useState } from 'react'
import { Portal } from '../Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    lazy?: boolean
    onClose?: () => void
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        lazy,
        onClose
    } = props

    const { theme } = useTheme()
    const [isMounted, setIsMounted] = useState(false)

    // Ленивая подгрузка модального окна
    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    // useCallback - не будет создаваться новая функция, а создается ссылка, пока не изменилось значение из массива.
    // Если передана, закрываем модальное при нажатии на overlay
    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose()
        }
    }, [onClose])

    // При клике на контентную часть, убираем ивенты
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    // При клике на ESC закрываю модальное окно
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    const mods: Mods = {
        [cls.open]: isOpen
    }

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
