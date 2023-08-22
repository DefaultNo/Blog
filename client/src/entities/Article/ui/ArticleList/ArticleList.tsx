import cls from './ArticleList.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

import { ArticleDisplayType, type Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
    className?: string
    isLoading?: boolean
    articles: Article[]
    displayType: ArticleDisplayType
}

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        isLoading,
        articles,
        displayType = ArticleDisplayType.COMPACT
    } = props

    const getSkeletons = (displayType: ArticleDisplayType) => {
        return new Array(displayType === ArticleDisplayType.COMPACT ? 8 : 2)
            .fill(0)
            .map((item, index) => (
                <ArticleListItemSkeleton key={index} displayType={displayType} />
            ))
    }

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[displayType]])}>
                {getSkeletons(displayType)}
            </div>
        )
    }

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem key={article.id} article={article} displayType={displayType} />
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[displayType]])}>
            {
                articles.length > 0
                    ? articles.map(renderArticle)
                    : null
            }
        </div>
    )
}
