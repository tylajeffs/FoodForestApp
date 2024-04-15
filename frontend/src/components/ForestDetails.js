import { useForestsContext } from "../hooks/useForestsContext"

const ForestDetails = ({ forest }) => {
    const { dispatch } = useForestsContext()

    const handleClick = async () => {
        const response = await fetch('/api/forests/' + forest._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'DELETE_FOREST', payload: json})
        }

    }

    return (
        <div className="forest-details">
            <h4>{forest.title}</h4>
            <p><strong>Ecoregion: </strong>{forest.ecoregion}</p>
            <p><strong>Canopy: </strong>{forest.canopy}</p>
            <p><strong>Shrub: </strong>{forest.shrub}</p>
            <p><strong>Herb: </strong>{forest.herb}</p>
            <p><strong>Ground Cover: </strong>{forest.groundCover}</p>
            <p><strong>Underground: </strong>{forest.underground}</p>
            <p><strong>Vine: </strong>{forest.vine}</p>
            <p><strong>Fungi: </strong>{forest.fungi}</p>
            <p><strong>Created: </strong>{forest.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default ForestDetails