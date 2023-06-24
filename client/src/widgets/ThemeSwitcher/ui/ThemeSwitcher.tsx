import cls from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

import { Theme, useTheme } from 'app/providers/ThemeProvider';


interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <label className={classNames(cls.ThemeSwitcher, {}, [className])}>
            <input
                checked={theme === Theme.DARK ? true : false}
                onChange={toggleTheme} 
                type='checkbox' 
                className={cls.checkbox} 
            />
            <span className={cls.check}></span>
        </label>
    )
}

