import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { BugButton } from 'app/providers/ErrorBoundary'
import { useTranslation } from 'react-i18next'
import { Burger } from 'shared/ui/Burger/Burger'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import LinkHome from 'shared/assets/icons/Navbar/Link-home.svg'
import LinkAbout from 'shared/assets/icons/Navbar/Link-about.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()

    const onToggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div data-testid='sidebar' className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Burger data-testid='sidebar-toggle' collapsed={collapsed} onClick={onToggle} />
            <ul className={classNames(cls.list)}>
                <li className={cls.item}>
                    <AppLink theme={AppLinkTheme.SIDEBAR} to={RoutePath.main}>
                        <span className={cls.svg}>
                            <LinkHome />
                        </span>
                        <span className={cls.link}>Главная</span>
                    </AppLink>
                </li>
                <li className={classNames(cls.item)}>
                    <AppLink theme={AppLinkTheme.SIDEBAR} to={RoutePath.about}>
                        <span className={cls.svg}>
                            <LinkAbout />
                        </span>
                        <span className={cls.link}>О сайте</span>
                    </AppLink>
                </li>
            </ul>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={true} />
                <BugButton />
            </div>
        </div>
    )
}
