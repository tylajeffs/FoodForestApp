import { useEffect } from "react";
import { useForestsContext } from "../hooks/useForestsContext";
import { useAuthContext } from "../hooks/useAuthContext"

//components
import ForestDetails from '../components/ForestDetails';
import ForestPicker from "./ForestPicker";

const Home = () => {
    const {forests, dispatch} = useForestsContext()
    const {user} = useAuthContext()

    useEffect(() => {
        const fetchForests = async () => {
            const response = await fetch('/api/forests', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_FORESTS', payload: json})
            }
        }

        if(user) {
            fetchForests()
        }
        

    }, [dispatch, user])

    return (
        <div className="home">
            <div className="forests">
                {forests && forests.map((forest)=> (
                    <ForestDetails key={forest._id} forest={forest} />
                ))}
            </div>
            <ForestPicker />
        </div>
    )
}

export default Home;