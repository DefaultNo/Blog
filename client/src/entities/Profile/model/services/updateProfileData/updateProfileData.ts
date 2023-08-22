import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { ValidateProfileError, type Profile } from '../../types/profile'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { validateProfileData } from '../validateProfileData/validateProfileData'

// eslint-disable-next-line
export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI
        const formData = getProfileForm(getState())
        const errors = validateProfileData(formData)

        if (errors.length) {
            return thunkAPI.rejectWithValue(errors)
        }

        try {
            const response = await thunkAPI.extra.api.put<Profile>(`/profile/${formData?.id || ''}`, formData)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }
    }
)
