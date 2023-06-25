import { classNames } from './classNames'

describe('classNames', () => {
    test('With only first param', () => {
        const expected = 'someClass'
        expect(classNames('someClass')).toBe(expected)
    })
    test('With additional class', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    })
    test('With mods (one is false)', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(expected)
    })
})
