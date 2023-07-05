import { type CounterSchema } from '../types/counterSchema'
import { counterActions, counterReducer } from './counterSlice'

describe('counterSlice', () => {
    test('increment', () => {
        const state: CounterSchema = { value: 10 }
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 })
    })
    test('decrement', () => {
        const state: CounterSchema = { value: 10 }
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 })
    })
})
