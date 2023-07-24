import { type AppDispatch } from 'app/providers/StoreProvider'
import { useDispatch } from 'react-redux'

// Функция возвращает типизированный dispatch ( <typeof createReduxStore>['dispatch'] )
export const useAppDispatch = () => useDispatch<AppDispatch>()
