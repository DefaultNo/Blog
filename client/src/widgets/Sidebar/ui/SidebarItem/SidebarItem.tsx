import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SidebarItem.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { type SidebarItemType } from 'widgets/Sidebar/model/items'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface SidebarItemProps {
    item?: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props
    const { t } = useTranslation()

    return (
        <AppLink className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])} theme={AppLinkTheme.SIDEBAR} to={item.path}>
            <span className={cls.svg}>
                {<item.Icon />}
            </span>
            <span className={cls.link}>{t(`${item.text}`)}</span>
        </AppLink>
    )
})
