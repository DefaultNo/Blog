import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';


interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ul className={classNames(cls.list)}>
                <li className={classNames(cls.item)}>
                    <AppLink to={'/'}>Главная</AppLink>
                </li>
                <li className={classNames(cls.item)}>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;