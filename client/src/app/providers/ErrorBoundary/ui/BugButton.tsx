import { useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'

// Кнопка для тестирования
export const BugButton = () => {
    const [error, setError] = useState(false)

    const onThrow = () => {
        setError(true)
    }

    useEffect(() => {
        if (error) {
            throw new Error('Произошла тестовая ошибка!')
        }
    }, [error])

    return (
        <Button onClick={onThrow}>Сделать ошибку</Button>
    )
}
