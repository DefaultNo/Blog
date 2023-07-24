import { Button, ThemeButton } from './Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
    test('To be in the Document', () => {
        render(<Button>Button</Button>)
        expect(screen.getByText('Button')).toBeInTheDocument()
    })

    test('With default class', () => {
        render(<Button theme={ThemeButton.PRIMARY}>Button</Button>)
        expect(screen.getByText('Button')).toHaveClass('primary')
    })
})
