import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'

import { Suspense, useEffect } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { useDispatch, useSelector } from 'react-redux'

import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { getUserInited, userActions } from 'entities/User'

function App () {
    const { theme } = useTheme()
    const dispatch = useDispatch()
    const inited = useSelector(getUserInited)

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('App', {}, [theme])}>
            <div className='AppWrapper'>
                <Suspense fallback>
                    <Navbar />
                    <div className='content-wrapper'>
                        <Sidebar />
                        {inited && <AppRouter />}
                    </div>
                </Suspense>
            </div>
        </div>
    )
}

export default App
