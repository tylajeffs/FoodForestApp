import { useState } from "react"
import { useForestsContext } from '../hooks/useForestsContext'

const ForestForm = () => {
    const { dispatch } = useForestsContext()

    const [title, setTitle] = useState('')
    const [ecoregion, setEcoregion] = useState('')
    const [canopy, setCanopy] = useState('')
    const [subCanopy, setSubCanopy] = useState('')
    const [shrub, setShrub] = useState('')
    const [herb, setHerb] = useState('')
    const [groundCover, setgroundCover] = useState('')
    const [underground, setUnderground] = useState('')
    const [vine, setVine] = useState('')
    const [fungi, setFungi] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const forest = {title, ecoregion, canopy, subCanopy, shrub, herb, groundCover, underground, vine, fungi}

        const response = await fetch('/api/forests', {
            method: 'POST',
            body: JSON.stringify(forest),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok) {
            setTitle('')
            setEcoregion('')
            setCanopy('')
            setSubCanopy('')
            setShrub('')
            setHerb('')
            setgroundCover('')
            setUnderground('')
            setVine('')
            setFungi('')
            setEmptyFields([])
            setError(null)
            console.log("new forest created", json)
            dispatch({type: 'CREATE_FOREST', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new forest</h3>

            <label>Forest Title:</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Ecoregion:</label>
            <input 
                type="text"
                onChange={(e) => setEcoregion(e.target.value)}
                value={ecoregion}
                className={emptyFields.includes('ecoregion') ? 'error' : ''}
            />

            <label>Canopy:</label>
            <input 
                type="text"
                onChange={(e) => setCanopy(e.target.value)}
                value={canopy}
                className={emptyFields.includes('canopy') ? 'error' : ''}
            />

            <label>Subcanopy:</label>
            <input 
                type="text"
                onChange={(e) => setSubCanopy(e.target.value)}
                value={subCanopy}
                className={emptyFields.includes('subCanopy') ? 'error' : ''}
            />

            <label>Shrub:</label>
            <input 
                type="text"
                onChange={(e) => setShrub(e.target.value)}
                value={shrub}
                className={emptyFields.includes('shrub') ? 'error' : ''}
            />

            <label>Herb:</label>
            <input 
                type="text"
                onChange={(e) => setHerb(e.target.value)}
                value={herb}
                className={emptyFields.includes('herb') ? 'error' : ''}
            />

            <label>Ground Cover:</label>
            <input 
                type="text"
                onChange={(e) => setgroundCover(e.target.value)}
                value={groundCover}
                className={emptyFields.includes('groundCover') ? 'error' : ''}
            />

            <label>Underground:</label>
            <input 
                type="text"
                onChange={(e) => setUnderground(e.target.value)}
                value={underground}
                className={emptyFields.includes('underground') ? 'error' : ''}
            />

            <label>Vine:</label>
            <input 
                type="text"
                onChange={(e) => setVine(e.target.value)}
                value={vine}
                className={emptyFields.includes('vine') ? 'error' : ''}
            />  

            <label>Fungi:</label>
            <input 
                type="text"
                onChange={(e) => setFungi(e.target.value)}
                value={fungi}
            />

            <button>Add Forest</button>
            {error && <div className="error">{error}</div>}


        </form>
    )
}

export default ForestForm