import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArtWorksAPI from '../services/artworks.service'
import ArtworkCard from '../components/ArtworkCard/ArtworkCard'


const ArtworkDetail = () => {
    const { id } = useParams()
    const [artwork, setArtwork] = useState(undefined);

    useEffect(() => {
        ArtWorksAPI.getOneArtworkById(id).then((artwork) => {
            console.log(artwork)
            setArtwork(artwork);
        })

    }, [])

    return (
        <>
            {artwork && <ArtworkCard artwork={artwork} />}

        </>

    )
}





export default ArtworkDetail;
