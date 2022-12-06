import { useEffect, useState } from 'react'
import ArtistAPI from '../services/artists.service'

const ArtistsList = () => {
    const [artists, setArtists] = useState([])

    useEffect(() => {
        ArtistAPI.getAllArtists().then((artists) => {

            setArtists(artists.results)
        })
    }, [])
    // const [pagination, setPagination] = useState(0)
    // const [maxPage, setMaxPage] = useState(0)
    return (
        <div>
            {
                artists.map((artist) => {
                    return (
                        <h1>{artist.name}</h1>
                    )
                })
            }
        </div>
    )
}

export default ArtistsList

