import { type CounterSchema } from '../../types/counterSchema'
import { createSelector } from '@reduxjs/toolkit'
import { getCounter } from '../getCounter/getCounter'

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value
)
