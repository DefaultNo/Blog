import { type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    children: ReactNode
    element?: HTMLElement // Куда? (место, например document.body) - в который будет вставлен children
}

export const Portal = ({ children, element = document.body }: PortalProps) => {
    return createPortal(children, element)
}
