import cls from './ThemeSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { memo } from 'react'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames(cls.ThemeSwitcherWrapper)}>
            <label className={classNames(cls.ThemeSwitcher, {}, [className])}>
                <input
                    checked={theme === Theme.DARK ? true : false}
                    onChange={toggleTheme}
                    type='checkbox'
                    className={cls.checkbox}
                />
                <span className={cls.check}></span>
            </label>
        </div>
    )
})
