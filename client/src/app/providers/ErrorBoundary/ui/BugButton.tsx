import { useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import ErrorIcon from 'shared/assets/icons/Navbar/Error.svg'
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
        <Button title='Тестовая ошибка' onClick={onThrow}>
            <ErrorIcon style={{ width: '30px', height: '30px' }} />
        </Button>
    )
}
