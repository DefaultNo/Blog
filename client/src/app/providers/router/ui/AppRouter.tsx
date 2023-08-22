import { Route, Routes } from 'react-router-dom'
import { Suspense, memo, useCallback } from 'react'

import { type AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'
import { RequireAuth } from './RequireAuth'

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const { element, path, authOnly } = route
        const elWrapper = (
            <Suspense fallback={<PageLoader />}>
                {element}
            </Suspense>
        )
        return (
            <Route
                key={path}
                path={path}
                element={authOnly ? <RequireAuth>{elWrapper}</RequireAuth> : elWrapper}
            />
        )
    }, [])
    return (
        <div className='page-wrapper'>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </div>
    )
}

export default memo(AppRouter)
