import cls from './ArticleListItem.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { ArticleDisplayType } from '../../model/types/article'

import { Card } from 'shared/ui/Card/Card'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface ArticleListItemSkeletonProps {
    className?: string
    displayType: ArticleDisplayType
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const {
        className,
        displayType
    } = props

    // // Темы статьи
    // const themes = article.type.map((theme) => {
    //     return (
    //         <div key={theme} className={cls.theme}>
    //             <Text sx={{ fontWeight: '600' }}>{theme}</Text>
    //         </div>
    //     )
    // })

    // По умолчанию - Compact
    let articleItem = (
        <article className={classNames(cls.ArticleListItemSkeleton, {}, [className, cls[displayType]])}>
            <Card>
                <div className={cls.image}>
                    <Skeleton ibg />
                </div>
                <div className={cls.body}>
                    <div className={cls.head}>
                        <Skeleton borderRadius='50%' width='50px' height='50px' />
                        <div className={cls.about}>
                            <Skeleton width='70px' height='16px' />
                            <Skeleton width='40px' height='16px' />
                        </div>
                    </div>
                    <Skeleton className={cls.title} height='18px' />
                    <div className={cls.statistics}>
                        <Skeleton className={cls.statsticsItem} width='30px' height='16px' />
                        <Skeleton className={cls.statsticsItem} width='30px' height='16px' />
                        <Skeleton className={cls.statsticsItem} width='30px' height='16px' />
                    </div>
                </div>
                <div className={cls.themes}>
                    <Skeleton className={cls.theme} width='60px' height='16px' />
                    <Skeleton className={cls.theme} width='40px' height='16px' />
                </div>
            </Card>
        </article>
    )

    switch (displayType) {
        case ArticleDisplayType.SINGLE: {
            articleItem = (
                <article className={classNames(cls.ArticleListItemSkeleton, {}, [className, cls[displayType]])}>
                    <Card>
                        <div className={cls.header}>
                            <Skeleton borderRadius='50%' width='40px' height='40px' />
                            <div className={cls.about}>
                                <Skeleton width='120px' height='18px' />
                                <Skeleton width='80px' height='16px' />
                            </div>
                        </div>
                        <div className={cls.body}>
                            <Skeleton className={cls.title} height='21px' />
                            <div className={cls.themes}>
                                <Skeleton width='60px' height='16px' />
                                <Skeleton width='40px' height='16px' />
                            </div>
                            <div className={cls.image}>
                                <Skeleton ibg />
                            </div>
                            <Skeleton height='60px' className={cls.description} />
                        </div>
                        <div className={cls.footer}>
                            <Skeleton className={cls.statsticsItem} width='120px' height='18px' />
                            <div className={cls.statistics}>
                                <Skeleton className={cls.statsticsItem} width='100px' height='16px' />
                                <Skeleton className={cls.statsticsItem} width='80px' height='16px' />
                                <Skeleton className={cls.statsticsItem} width='90px' height='16px' />
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
