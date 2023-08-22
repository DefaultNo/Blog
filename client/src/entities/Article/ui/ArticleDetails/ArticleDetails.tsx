import cls from './ArticleDetails.module.scss'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'

import AuthorIcon from 'shared/assets/icons/common/Author.svg'
import CalendarIcon from 'shared/assets/icons/common/Calendar.svg'
import Like from 'shared/assets/icons/common/Like.svg'
import Comment from 'shared/assets/icons/common/Comment.svg'
import Views from 'shared/assets/icons/common/Views.svg'

import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import { memo, useCallback, useEffect } from 'react'

import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../../Article/model/selectors/articleDetails'

import { ArticleContentType, type ArticleContent } from '../../model/types/article'
import { ArticleTextComponent } from '../ArticleTextComponent/ArticleTextComponent'
import { ArticleImageComponent } from '../ArticleImageComponent/ArticleImageComponent'
import { ArticleCodeComponent } from '../ArticleCodeComponent/ArticleCodeComponent'

// SHARED
import { Text } from 'shared/ui/Text/Text'
import { TextAlign, TextSize, TextTheme } from 'shared/ui/Text/types'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Icon } from 'shared/ui/Icon/Icon'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const article = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleDetailsError)

    const renderArticleContent = useCallback((content: ArticleContent) => {
        switch (content.type) {
            case ArticleContentType.TEXT: {
                return <ArticleTextComponent key={content.id} className={cls.contentItem} content={content} />
            }
            case ArticleContentType.IMAGE: {
                return <ArticleImageComponent key={content.id} className={cls.contentItem} content={content} />
            }
            case ArticleContentType.CODE: {
                return <ArticleCodeComponent key={content.id} className={cls.contentItem} content={content} />
            }
            default:
                return null
        }
    }, [])

    useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [dispatch, id])

    let content
    if (isLoading) {
        content = (
            <>
                <div className={cls.header}>
                    <div className={cls.about}>
                        <div className={cls.avatar}>
                            <Skeleton borderRadius='50%' />
                        </div>
                        <div className={cls.info}>
                            <div className={cls.infoItem}>
                                <Skeleton width='160px' fontSize='16px' />
                            </div>
                            <div className={cls.infoItem}>
                                <Skeleton width='140px' fontSize='16px' />
                            </div>
                        </div>
                    </div>
                    <div className={cls.description}>
                        <div className={cls.text}>
                            <Skeleton width='460px' fontSize='24px' />
                            <Skeleton width='400px' fontSize='16px' />
                        </div>
                        <div className={cls.statistics}>
                            <Skeleton width='120px' fontSize='14px' />
                            <Skeleton width='120px' fontSize='14px' />
                            <Skeleton width='120px' fontSize='14px' />
                        </div>
                    </div>
                </div>
                <Skeleton height='24px' width='33.333%' />
                <Skeleton height='60px' />
                <Skeleton height='80px' />
                <Skeleton height='160px' />
            </>
        )
    } else if (error) {
        content = (
            <div className={classNames(cls.ArticleError, {}, [className, cls.error])}>
                <Text position={TextAlign.CENTER} theme={TextTheme.ERROR} sx={{ size: TextSize.FS24 }}>
                    Произошла ошибка при загрузке
                </Text>
                <Text position={TextAlign.CENTER} theme={TextTheme.ERROR} sx={{ size: TextSize.FS18 }}>
                    Попробуйте обновить страницу
                </Text>
            </div>
        )
    } else {
        content = (
            <>
                <div className={cls.header}>
                    <div className={cls.about}>
                        <div className={cls.avatar}>
                            <Avatar />
                        </div>
                        <div className={cls.info}>
                            <div className={cls.infoItem}>
                                <Icon className={cls.icon} Svg={AuthorIcon} />
                                <Text className={cls.author} sx={{ fontWeight: '500' }}>
                                    Автор темы:
                                    <Text
                                        type='span'
                                        theme={TextTheme.BLUE}
                                        sx={{ fontWeight: '600' }}
                                    >
                                        Гусенев
                                    </Text>
                                </Text>
                            </div>
                            <div className={cls.infoItem}>
                                <Icon className={cls.icon} Svg={CalendarIcon} />
                                <Text sx={{ fontWeight: '600' }} theme={TextTheme.TEXT}>
                                    18 Янв 2022
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className={cls.description}>
                        <div className={cls.text}>
                            <Text
                                type='h1'
                                sx={{ size: TextSize.FS24, fontWeight: '700' }}
                            >
                                Ассинхронность в JavaScript
                            </Text>
                            <Text
                                type='h2'
                                theme={TextTheme.TEXT}
                                sx={{ fontWeight: '500' }}
                            >
                                    Какой-то не обьяснимый текст
                            </Text>
                        </div>
                        <div className={cls.statistics}>
                            <div className={cls.statisticsItem}>
                                <Icon className={cls.icon} Svg={Like} />
                                <Text sx={{ fontWeight: '500', size: TextSize.FS14 }} className={cls.statisticsInfo}>
                                    Понравилось:
                                    <Text
                                        type='span'
                                        theme={TextTheme.BLUE}
                                        sx={{ fontWeight: '700' }}
                                    >
                                        32
                                    </Text>
                                </Text>
                            </div>
                            <div className={cls.statisticsItem}>
                                <Icon className={cls.icon} Svg={Views} />
                                <Text sx={{ fontWeight: '500', size: TextSize.FS14 }} className={cls.statisticsInfo}>
                                    Просмотров:
                                    <Text
                                        type='span'
                                        theme={TextTheme.BLUE}
                                        sx={{ fontWeight: '700' }}
                                    >
                                        122
                                    </Text>
                                </Text>
                            </div>
                            <div className={cls.statisticsItem}>
                                <Icon className={cls.icon} Svg={Comment} />
                                <Text sx={{ fontWeight: '500', size: TextSize.FS14 }} className={cls.statisticsInfo}>
                                    Комментариев:
                                    <Text
                                        type='span'
                                        theme={TextTheme.BLUE}
                                        sx={{ fontWeight: '700' }}
                                    >
                                        8
                                    </Text>
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cls.content}>
                    {article?.content.map(renderArticleContent)}
                </div>
            </>
        )
    }

    const mods: Mods = {
        [cls.loading]: isLoading
    }

    return (
        <DynamicModuleLoader name={'articleDetails'} reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ArticleDetails, mods, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    )
})
