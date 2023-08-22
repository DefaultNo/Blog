import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Article } from '../../types/article'
import { type ThunkConfig } from 'app/providers/StoreProvider'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'article/fetchArticleById',
    async (articleId, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Article>(`/articles/${articleId}`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Error')
        }
    }
)
