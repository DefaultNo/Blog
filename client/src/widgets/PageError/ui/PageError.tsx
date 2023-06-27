import cls from './PageError.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import PageErrorImage from 'shared/assets/images/PageError/page-error-image.svg'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface PageErrorProps {
    className?: string
}

const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation()

    const reloadPage = (): void => {
        location.reload()
    }

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <div className={classNames(cls.image)}>
                <PageErrorImage />
            </div>
            <p className={classNames(cls.text)}>{t('Упс!')}</p>
            <p className={classNames(cls.text)}>{t('Что-то пошло не так')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    )
}

export default PageError
