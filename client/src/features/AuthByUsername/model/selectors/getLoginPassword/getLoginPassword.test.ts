import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginpassword.test', () => {
    test('Shoult return user password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'qwerty'
            }
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('qwerty')
    })
    test('Shoult return user empty', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginPassword(state as StateSchema)).toEqual('')
    })
})
