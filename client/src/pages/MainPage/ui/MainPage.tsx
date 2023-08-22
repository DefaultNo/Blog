import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { IconButton } from 'shared/ui/IconButton/IconButton'

const MainPage = () => {
    const { t } = useTranslation()

    return (
        <div>
            {t('Основная страница')}
        </div>
    )
}

export default MainPage
