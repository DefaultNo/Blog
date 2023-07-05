import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'

import { Suspense, useEffect } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { useDispatch } from 'react-redux'

import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { userActions } from 'entities/User'

function App () {
    const { theme } = useTheme()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

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
