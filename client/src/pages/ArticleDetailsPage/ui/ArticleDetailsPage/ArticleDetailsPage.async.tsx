import { lazy } from 'react'

export const ArticleDetailAsync = lazy(async () => await import('./ArticleDetailsPage'))
