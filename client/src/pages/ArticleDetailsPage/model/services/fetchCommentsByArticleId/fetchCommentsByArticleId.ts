import { type Comment } from 'entities/Comment/model/types/comment'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
    'articleDetails/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        if (!articleId) {
            return thunkAPI.rejectWithValue('Error')
        }

        try {
            const response = await thunkAPI.extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user'
                }
            })
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Error')
        }
    }
)
