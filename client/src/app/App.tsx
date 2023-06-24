import './styles/index.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

import {Suspense} from 'react'
import { useTranslation } from 'react-i18next';
// HOOKS
import { useTheme } from 'app/providers/ThemeProvider';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';


const App = () => {
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

export default App;