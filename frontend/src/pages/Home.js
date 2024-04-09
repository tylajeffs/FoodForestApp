import { useEffect, useState } from "react";

const Home = () => {
    const [forests, setForests] = useState(null)

    useEffect(() => {
        const fetchForests = async () => {
            const response = await fetch('/api/forests')
            const json = await response.json()

            if(response.ok) {
                setForests(json)
            }
        }
        fetchForests()

    }, [])

    return (
        <div className="home">
            <div className="forests">
                {forests && forests.map((forest)=> (
                    <p key={forest._id}>{forest.title}</p>
                ))}
            </div>
        </div>
    )
}

export default Home;