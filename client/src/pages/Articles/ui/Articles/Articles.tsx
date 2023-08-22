import cls from './Articles.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

import { memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList'
import { type ArticleDisplayType } from 'entities/Article'
import { articlesActions, articlesReducer, getArticles } from '../../model/slices/articlesSlice'
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles'

// SELECTORS
import {
  getArticlesDisplayType,
  getArticlesError,
  getArticlesIsLoading
} from 'pages/Articles/model/selectors/articlesSelector'
import { ChangeArticleDisplayType } from 'features/ChangeArticleDisplayType'

interface ArticlesProps {
    className?: string
}

const reducers: ReducersList = {
  articles: articlesReducer
}

const Articles = (props: ArticlesProps) => {
    const {
        className
    } = props
    const dispatch = useAppDispatch()
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesIsLoading)
    const error = useSelector(getArticlesError)
    const displayType = useSelector(getArticlesDisplayType)

    const onChangeDisplayType = useCallback((displayType: ArticleDisplayType) => {
      dispatch(articlesActions.setDisplayType(displayType))
    }, [dispatch])

    useEffect(() => {
      dispatch(articlesActions.initState())
      dispatch(fetchArticles())
    // eslint-disable-next-line
    }, [])

    return (
      <DynamicModuleLoader reducers={reducers}>
        <div className={classNames(cls.Articles, {}, [className])}>
          <ChangeArticleDisplayType onChangeDisplayType={onChangeDisplayType} currentDisplayType={displayType} />
          <ArticleList displayType={displayType} isLoading={isLoading} articles={articles} />
        </div>
      </DynamicModuleLoader>
    )
}

export default memo(Articles)
