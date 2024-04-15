import { createContext, useReducer } from "react";

export const ForestsContext = createContext()

export const forestsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FORESTS':
            return {
                forests: action.payload
            }
        case 'CREATE_FOREST':
            return {
                forests: [action.payload, ...state.forests]
            }
        case 'DELETE_FOREST':
            return {
                forests: state.forests.filter((f) => f._id !== action.payload._id)
            }
        default: 
            return state
    }

}

export const ForestsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(forestsReducer, {
        forests: null
    })

    return (
        <ForestsContext.Provider value={{...state, dispatch}}>
            { children }
        </ForestsContext.Provider>
    )
}