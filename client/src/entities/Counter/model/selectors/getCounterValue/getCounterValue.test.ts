import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getCounterValue } from './getCounterValue'

describe('GetCounterValue', () => {
    test('example', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        }
        expect(getCounterValue(state as StateSchema)).toEqual(10)
    })
})
