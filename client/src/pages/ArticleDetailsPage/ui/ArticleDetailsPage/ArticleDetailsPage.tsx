import cls from './ArticleDetailsPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

import { memo, useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Return from 'shared/assets/icons/common/CommentReply.svg'

import { ArticleDetails } from 'entities/Article'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments/comments'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { CommentBlock } from 'entities/Comment/ui/CommentBlock/CommentBlock'
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface ArticleDetailsProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetail = (props: ArticleDetailsProps) => {
    const dispatch = useAppDispatch()
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [])}>
                Статья не найдена
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [])}>
                <Button disableRipple={true} onClick={onBackToList} theme={ThemeButton.TEXT} className={cls.backToList}>
                    <Icon Svg={Return} />
                    Вернуться к списку
                </Button>
                <div className={cls.body}>
                    <ArticleDetails id={id} />
                    <CommentBlock isLoading={commentsIsLoading} comments={comments} onSendComment={onSendComment} />
                </div>
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetail)
