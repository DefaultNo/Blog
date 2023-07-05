import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

const MainPage = () => {
    const { t } = useTranslation()

    return (
        <div>
            {t('Основная страница')}
        </div>
    )
}

export default MainPage
