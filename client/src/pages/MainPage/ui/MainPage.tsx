import { useTranslation } from "react-i18next";

const MainPage = () => {
    const {t} = useTranslation();

    return (
        <div>
            {t('Основная страница')}
        </div>
    )
}

export default MainPage;