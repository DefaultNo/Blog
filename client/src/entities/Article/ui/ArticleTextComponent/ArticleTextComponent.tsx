import cls from './ArticleTextComponent.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

import { memo } from 'react'
import { type ArticleTextContent } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'
import { TextLH, TextSize, TextTheme } from 'shared/ui/Text/types'

interface ArticleTextComponentProps {
    className?: string
    content: ArticleTextContent
}

export const ArticleTextComponent = memo((props: ArticleTextComponentProps) => {
    const { className, content } = props

    const { title, paragraphs } = content

    return (
        <div className={classNames(cls.ArticleTextComponent, {}, [className])}>
            {title && (
                <Text
                    className={cls.title}
                    type='h3'
                    sx={{ size: TextSize.FS21, fontWeight: '600' }}
                >
                    {title}
                </Text>
            )}

            {paragraphs.map((paragraph, index) => {
                return (
                    <Text
                        className={cls.paragraph}
                        key={index}
                        sx={{ lineHeight: TextLH.LH125 }}
                        type='p'
                        theme={TextTheme.TEXT}
                    >
                        {paragraph}
                    </Text>
                )
            })}
        </div>
    )
})
