import cls from './ArticleImageComponent.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type ArticleImageContent } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'
import { TextSize, TextTheme } from 'shared/ui/Text/types'

interface ArticleImageComponentProps {
    className?: string
    content?: ArticleImageContent
}

export const ArticleImageComponent = (props: ArticleImageComponentProps) => {
    const { className, content } = props

    return (
        <div className={classNames(cls.ArticleImageComponent, {}, [className])}>
            <div className={cls.image}>
                <img src={content?.src} alt={content?.title} />
            </div>
            {content?.title && (
                <Text
                    theme={TextTheme.TEXT}
                    sx={{ size: TextSize.FS12 }}
                    className={cls.description}
                >
                    {content.title}
                </Text>
            )}
        </div>
    )
}
