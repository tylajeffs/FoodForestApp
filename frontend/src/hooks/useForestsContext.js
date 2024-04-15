import { ForestsContext } from "../context/ForestContext";
import { useContext } from "react";


export const useForestsContext = () => {
    const context = useContext(ForestsContext)

    if(!context) {
        throw Error('useForestsContext must be used inside a ForestsContextProvider')
    }

    return context
}