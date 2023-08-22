import cls from './ArticleCodeComponent.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { type ArticleCodeContent } from '../../model/types/article'
import { Code } from 'shared/ui/Code/Code'

interface ArticleCodeComponentProps {
    className?: string
    content: ArticleCodeContent
}

export const ArticleCodeComponent = memo((props: ArticleCodeComponentProps) => {
    const {
        className,
        content
    } = props

    return (
        <div className={classNames(cls.ArticleCodeComponent, {}, [className])}>
            <Code code={content.code}></Code>
        </div>
    )
})
