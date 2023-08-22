import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profile'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (profileId, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Profile>(`/profile/${profileId}`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Error')
        }
    }
)
