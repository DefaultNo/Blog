import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SidebarItem.module.scss'
import { AppLinkTheme, AppLink } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { Ripple } from 'shared/ui/Ripple/Ripple'
import { type SidebarItemType } from 'widgets/Sidebar/model/types/sidebar'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = (props: SidebarItemProps) => {
    const { item, collapsed } = props
    const { t } = useTranslation()
    const isAuth = useSelector(getUserAuthData)

    if (item.authOnly && !isAuth) {
        return null
    }

    return (
        <AppLink
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
            theme={AppLinkTheme.SIDEBAR}
            to={item.path}
        >
            <span className={cls.svg}>
                {<item.Icon />}
            </span>
            <span className={cls.link}>{t(`${item.text}`)}</span>
            <Ripple color={'var(--inverted-primary-color)'} />
        </AppLink>
    )
}
