import  { useAuthContext } from './useAuthContext'
import { useForestsContext } from './useForestsContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: forestDispatch } = useForestsContext()

    const logout = () => {
        //remove user from local storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({type: 'LOGOUT'})
        forestDispatch({type: 'SET_FORESTS', payload: null})

    }

    return { logout }
}