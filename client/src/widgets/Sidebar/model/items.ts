import LinkHome from 'shared/assets/icons/Navbar/Link-home.svg'
import LinkAbout from 'shared/assets/icons/Navbar/Link-about.svg'
import LinkProfile from 'shared/assets/icons/Navbar/Link-profile.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        Icon: LinkHome
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: LinkAbout
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: LinkProfile
    }
]
