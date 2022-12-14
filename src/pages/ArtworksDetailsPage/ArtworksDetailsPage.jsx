import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArtWorksAPI from '../../services/artworks.service'
import ArtworkCard from '../../components/ArtworkCard/ArtworkCard'
import StripeAPI from '../../services/stripe.service'


const ArtworkDetail = () => {
    const { id } = useParams()
    const [artwork, setArtwork] = useState(undefined);


    const handleCheckout = (event) => {
        event.preventDefault()
        const body = { name: artwork.name, price: artwork.price, success_url: "http://localhost:3000/", cancel_url: "http://localhost:3000/" }
        StripeAPI.Payment(body).then(res => {
            window.document.location.href = res.url
        })

    }

    useEffect(() => {
        ArtWorksAPI.getOneArtworkById(id).then((artwork) => {
            console.log(artwork)
            setArtwork(artwork);
        })

    }, [])

    return (
        <>
            {artwork && <ArtworkCard artwork={artwork} />}
            <form method="POST" >
                <button onClick={handleCheckout}>check</button> </form >
        </>

    )
}






export default ArtworkDetail;
