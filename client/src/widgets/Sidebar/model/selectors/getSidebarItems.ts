import { type SidebarItemType } from './../types/sidebar'
import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from 'entities/User'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import LinkHome from 'shared/assets/icons/Navbar/Link-home.svg'
import LinkAbout from 'shared/assets/icons/Navbar/Link-about.svg'
import LinkProfile from 'shared/assets/icons/Navbar/Link-profile.svg'
import LinkArticles from 'shared/assets/icons/Navbar/Link-articles.svg'

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const SidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                text: 'Главная',
                Icon: LinkHome
            },
            {
                path: RoutePath.about,
                text: 'О сайте',
                Icon: LinkAbout
            }
        ]
        if (userData) {
            SidebarItemsList.push(
                {
                    path: `${RoutePath.profile}${userData.id}`,
                    text: 'Профиль',
                    Icon: LinkProfile,
                    authOnly: true
                },
                {
                    path: RoutePath.articles,
                    text: 'Статьи',
                    Icon: LinkArticles
                }
            )
        }
        return SidebarItemsList
    }
)
