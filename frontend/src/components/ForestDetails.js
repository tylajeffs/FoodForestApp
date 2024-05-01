import { useForestsContext } from "../hooks/useForestsContext"
import { useAuthContext } from "../hooks/useAuthContext"

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ForestDetails = ({ forest }) => {
    const { dispatch } = useForestsContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if(!user) {
            return
        }

        const response = await fetch('/api/forests/' + forest._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
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
            <p><strong>Subcanopy: </strong>{forest.subCanopy}</p>
            <p><strong>Shrub: </strong>{forest.shrub}</p>
            <p><strong>Herb: </strong>{forest.herb}</p>
            <p><strong>Ground Cover: </strong>{forest.groundCover}</p>
            <p><strong>Underground: </strong>{forest.underground}</p>
            <p><strong>Vine: </strong>{forest.vine}</p>
            <p><strong>Fungi: </strong>{forest.fungi}</p>
            <p><strong>Created: </strong>{formatDistanceToNow(new Date(forest.createdAt),{ addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default ForestDetails