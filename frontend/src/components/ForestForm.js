import { useState } from "react"

const ForestForm = () => {
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
            setError(null)
            console.log("new forest created", json)
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
            />

            <label>Ecoregion:</label>
            <input 
                type="text"
                onChange={(e) => setEcoregion(e.target.value)}
                value={ecoregion}
            />

            <label>Canopy:</label>
            <input 
                type="text"
                onChange={(e) => setCanopy(e.target.value)}
                value={canopy}
            />

            <label>Subcanopy:</label>
            <input 
                type="text"
                onChange={(e) => setSubCanopy(e.target.value)}
                value={subCanopy}
            />

            <label>Shrub:</label>
            <input 
                type="text"
                onChange={(e) => setShrub(e.target.value)}
                value={shrub}
            />

            <label>Herb:</label>
            <input 
                type="text"
                onChange={(e) => setHerb(e.target.value)}
                value={herb}
            />

            <label>Ground Cover:</label>
            <input 
                type="text"
                onChange={(e) => setgroundCover(e.target.value)}
                value={groundCover}
            />

            <label>Underground:</label>
            <input 
                type="text"
                onChange={(e) => setUnderground(e.target.value)}
                value={underground}
            />

            <label>Vine:</label>
            <input 
                type="text"
                onChange={(e) => setVine(e.target.value)}
                value={vine}
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