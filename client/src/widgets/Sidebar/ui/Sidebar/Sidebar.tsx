import cls from './Sidebar.module.scss'
import { memo, useState } from 'react'
import { BugButton } from 'app/providers/ErrorBoundary'

import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'

import { classNames } from 'shared/lib/classNames/classNames'
import { Burger } from 'shared/ui/Burger/Burger'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const SidebarItemsList = useSelector(getSidebarItems)

    const onToggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div data-testid='sidebar' className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <div className={cls.SidebarWrapper}>
                <Burger data-testid='sidebar-toggle' collapsed={collapsed} onClick={onToggle} />
                <ul className={classNames(cls.list)}>
                    {
                        SidebarItemsList.map((item) => (
                            <li key={item.path} className={classNames(cls.item)}>
                                <SidebarItem
                                    collapsed={collapsed}
                                    item={item}
                                />
                            </li>
                        ))
                    }
                </ul>
                <div className={cls.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher short={true} />
                    <BugButton />
                </div>
            </div>
        </div>
    )
})
