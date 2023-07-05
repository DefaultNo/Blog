import type { User, UserSchema } from './model/types/user'
import { userActions, userReducer } from './model/slice/userSlice'
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'

export { userActions, userReducer }
export { type User, type UserSchema }
export { getUserAuthData }
