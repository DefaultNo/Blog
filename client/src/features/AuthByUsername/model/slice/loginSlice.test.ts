import { type LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'Username' }
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('Username123')))
            .toEqual({ username: 'Username123' })
    })
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'qwerty' }
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('qwerty123')))
            .toEqual({ password: 'qwerty123' })
    })
})
