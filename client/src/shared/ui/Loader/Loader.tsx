import { classNames } from 'shared/lib/classNames/classNames'
import './Loader.scss'

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames('loader', {}, [])}>
            <span />
            <span />
            <span />
        </div>
    )
}
