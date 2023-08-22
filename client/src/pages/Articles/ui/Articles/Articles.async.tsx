import { lazy } from 'react'

export const ArticlesAsync = lazy(async () => await import('./Articles'))
