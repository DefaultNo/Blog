import { type StateSchema } from 'app/providers/StoreProvider'
import { ArticleDisplayType } from 'entities/Article'

export const getArticlesError = (state: StateSchema) => state.articles?.error
export const getArticlesIsLoading = (state: StateSchema) => state.articles?.isLoading || false
export const getArticlesDisplayType = (state: StateSchema) => state.articles?.displayType || ArticleDisplayType.COMPACT
