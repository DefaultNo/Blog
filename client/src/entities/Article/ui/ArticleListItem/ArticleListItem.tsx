import cls from './ArticleListItem.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { ArticleDisplayType, type Article, ArticleContentType, type ArticleTextContent } from '../../model/types/article'

// ICONS
import Like from 'shared/assets/icons/common/Like.svg'
import Comment from 'shared/assets/icons/common/Comment.svg'
import Views from 'shared/assets/icons/common/Views.svg'
import Author from 'shared/assets/icons/common/Author.svg'
import Calendar from 'shared/assets/icons/common/Calendar.svg'

// SHARED
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { TextSize, TextTheme } from 'shared/ui/Text/types'
import { Icon } from 'shared/ui/Icon/Icon'
import { Card } from 'shared/ui/Card/Card'
import { Button } from 'shared/ui/Button/Button'

import { ArticleTextComponent } from '../ArticleTextComponent/ArticleTextComponent'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { AppLink } from 'shared/ui/AppLink/AppLink'

interface ArticleListItemProps {
    className?: string
    article: Article
    displayType: ArticleDisplayType
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        displayType
    } = props
    const navigate = useNavigate()
    const articlePath = `${RoutePath.article_detail}${article.id}`

    const onOpenArticle = useCallback(() => {
        navigate(articlePath)
    }, [navigate, articlePath])

    // Темы статьи
    const themes = article.type.map((theme) => {
        return (
            <div key={theme} className={cls.theme}>
                <Text sx={{ fontWeight: '600' }}>{theme}</Text>
            </div>
        )
    })

    // По умолчанию - Compact
    let articleItem = (
        <article className={classNames(cls.ArticleListItem, {}, [className, cls[displayType]])}>
            <Card onClick={onOpenArticle}>
                <div style={{ backgroundColor: '#fff' }} className={cls.image}>
                    <img src={article.img} alt={article.title} />
                </div>
                <div className={cls.body}>
                    <div className={cls.head}>
                        <Avatar src={article.user.avatar} className={cls.avatar} size='50px' />
                        <div className={cls.about}>
                            <Text
                                sx={{ fontWeight: '500', size: TextSize.FS14 }}
                                className={cls.name}
                            >
                                Автор:
                                <Text
                                    type='span'
                                    theme={TextTheme.BLUE}
                                    sx={{ fontWeight: '700', size: TextSize.FS14 }}
                                >
                                    {article.user.username}
                                </Text>
                            </Text>
                            <Text sx={{ fontWeight: '500', size: TextSize.FS14 }} className={cls.date}>
                                {article.createdAt}
                            </Text>
                        </div>
                    </div>
                    <Text type='h3' className={cls.title} sx={{ fontWeight: '700', size: TextSize.FS18 }}>
                        {article.title}
                    </Text>
                    <div className={cls.statistics}>
                        <div className={cls.statsticsItem}>
                            <Icon Svg={Like} />
                            <Text theme={TextTheme.BLUE} sx={{ fontWeight: '700' }}>
                                13
                            </Text>
                        </div>
                        <div className={cls.statsticsItem}>
                            <Icon Svg={Views} />
                            <Text theme={TextTheme.BLUE} sx={{ fontWeight: '700' }}>
                                115
                            </Text>
                        </div>
                        <div className={cls.statsticsItem}>
                            <Icon Svg={Comment} />
                            <Text theme={TextTheme.BLUE} sx={{ fontWeight: '700' }}>
                                12
                            </Text>
                        </div>
                    </div>
                </div>
                <div className={cls.themes}>
                    {themes}
                </div>
            </Card>
        </article>
    )

    switch (displayType) {
        case ArticleDisplayType.SINGLE: {
            const textBlock = article.content.find((block) =>
                block.type === ArticleContentType.TEXT) as ArticleTextContent

            articleItem = (
                <article className={classNames(cls.ArticleListItem, {}, [className, cls[displayType]])}>
                    <Card>
                        <div className={cls.header}>
                            <Avatar src={article.user.avatar} className={cls.avatar} size='40px' />
                            <div className={cls.about}>
                                <Text
                                    sx={{ fontWeight: '500' }}
                                    className={cls.name}
                                >
                                    <Icon Svg={Author} />
                                    Автор:
                                    <Text
                                        type='span'
                                        theme={TextTheme.BLUE}
                                        sx={{ fontWeight: '700' }}
                                    >
                                        {article.user.username}
                                    </Text>
                                </Text>
                                <Text sx={{ fontWeight: '500' }} className={cls.date}>
                                    <Icon Svg={Calendar} />
                                    {article.createdAt}
                                </Text>
                            </div>
                        </div>
                        <div className={cls.body}>
                            <Text type='h3' className={cls.title} sx={{ fontWeight: '700', size: TextSize.FS21 }}>
                                <AppLink to={articlePath}>
                                    {article.title}
                                </AppLink>
                            </Text>
                            <div className={cls.themes}>
                                {themes}
                            </div>
                            <div className={cls.image}>
                                <img src={article.img} alt={article.title} />
                            </div>
                            {
                                textBlock && (
                                    <ArticleTextComponent content={textBlock} className={cls.description} />
                                )
                            }
                        </div>
                        <div className={cls.footer}>
                            <Button onClick={onOpenArticle} className={cls.more}>Читать</Button>
                            <div className={cls.statistics}>
                                <div className={cls.statsticsItem}>
                                    <Icon Svg={Like} />
                                    <Text sx={{ fontWeight: '500' }}>
                                        Понравилось:
                                        <Text theme={TextTheme.BLUE} sx={{ fontWeight: '700' }} type='span'>12</Text>
                                    </Text>
                                </div>
                                <div className={cls.statsticsItem}>
                                    <Icon Svg={Views} />
                                    <Text sx={{ fontWeight: '500' }}>
                                        Просмотры:
                                        <Text theme={TextTheme.BLUE} sx={{ fontWeight: '700' }} type='span'>12</Text>
                                    </Text>
                                </div>
                                <div className={cls.statsticsItem}>
                                    <Icon Svg={Comment} />
                                    <Text sx={{ fontWeight: '500' }}>
                                        Комментариев:
                                        <Text theme={TextTheme.BLUE} sx={{ fontWeight: '700' }} type='span'>12</Text>
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </Card>
                </article>
            )
            break
        }
        default:
            return articleItem
    }

    return (
        <>
            {articleItem}
        </>
    )
})
