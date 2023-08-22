import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities/Article'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticles = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articleDetails/fetchCommentsByArticleId',
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user'
                }
            })
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Error')
        }
    }
)
