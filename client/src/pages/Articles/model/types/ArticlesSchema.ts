import { type EntityState } from '@reduxjs/toolkit'
import { type ArticleDisplayType, type Article } from 'entities/Article'

export interface ArticlesSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string
    displayType: ArticleDisplayType
}
