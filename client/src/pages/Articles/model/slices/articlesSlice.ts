import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { ArticleDisplayType, type Article } from 'entities/Article'
import { type ArticlesSchema } from '../types/ArticlesSchema'
import { fetchArticles } from '../services/fetchArticles/fetchArticles'
import { ARTICLES_DISPLAY_TYPE_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articles || articlesAdapter.getInitialState()
)

const articlesSlice = createSlice({
    name: 'articlesSlice',
    initialState: articlesAdapter.getInitialState<ArticlesSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        displayType: ArticleDisplayType.COMPACT
    }),
    reducers: {
        setDisplayType: (state, action: PayloadAction<ArticleDisplayType>) => {
            state.displayType = action.payload
            localStorage.setItem(ARTICLES_DISPLAY_TYPE_LOCALSTORAGE_KEY, action.payload)
        },
        initState: (state) => {
            state.displayType = localStorage.getItem(ARTICLES_DISPLAY_TYPE_LOCALSTORAGE_KEY) as ArticleDisplayType
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false
                articlesAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
            })
    }
})

export const { reducer: articlesReducer } = articlesSlice
export const { actions: articlesActions } = articlesSlice
