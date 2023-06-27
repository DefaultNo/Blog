import './styles/index.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'

import { Suspense, useEffect } from 'react'
// HOOKS
import { useTheme } from 'app/providers/ThemeProvider'

import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

function App () {
    const { theme } = useTheme()

    return (
        <div className={classNames('App', {}, [theme])}>
            <Suspense fallback>
                <Navbar />
                <div className={classNames('content-wrapper')}>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
