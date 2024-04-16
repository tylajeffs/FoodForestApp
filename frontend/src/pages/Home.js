import { useEffect } from "react";
import { useForestsContext } from "../hooks/useForestsContext";

//components
import ForestDetails from '../components/ForestDetails';
import ForestForm from "../components/ForestForm";

const Home = () => {
    const {forests, dispatch} = useForestsContext()

    useEffect(() => {
        const fetchForests = async () => {
            const response = await fetch('/api/forests')
            const json = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_FORESTS', payload: json})
            }
        }
        fetchForests()

    }, [dispatch])

    return (
        <div className="home">
            <div className="forests">
                {forests && forests.map((forest)=> (
                    <ForestDetails key={forest._id} forest={forest} />
                ))}
            </div>
            <ForestForm />
        </div>
    )
}

export default Home;