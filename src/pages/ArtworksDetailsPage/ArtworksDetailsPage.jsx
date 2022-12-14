import { AuthContext } from '../../context/auth.context';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArtWorksAPI from '../../services/artworks.service'
import ArtworkCard from '../../components/ArtworkCard/ArtworkCard'
import StripeAPI from '../../services/stripe.service'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import AuthAPI from '../../services/auth.service'


const ArtworkDetail = () => {
    const { id } = useParams()
    const [artwork, setArtwork] = useState(undefined);
    const { isLoggedIn } = useContext(AuthContext);

    const handleCart = (event) => {
        event.preventDefault()

        AuthAPI.cartUpdate().then(() => {
            console.log(AuthAPI.cartUpdate)
            setArtwork(artwork.cart)
        })
    }
    AuthAPI.cartUpdate()


    // const addToCart = (id) = {

    //     if(!cart.includes(id)) setCart(cart.concat(id));
    //     console.log(id)
    // }

    const handleCheckout = (event) => {
        event.preventDefault()
        const body = { name: artwork.name, price: artwork.price, success_url: "http://localhost:3000/", cancel_url: "http://localhost:3000/" }
        StripeAPI.Payment(body).then(res => {
            window.document.location.href = res.url
        })

    }

    useEffect(() => {
        ArtWorksAPI.getOneArtworkById(id).then((artwork) => {
            setArtwork(artwork);
        })

    }, [])

    return (
        <>
            {artwork && <ArtworkCard artwork={artwork} />}
            <form method="POST" >
                {isLoggedIn ? (
                    <Button variant="link" onClick={handleCheckout}>check</Button>)
                    : (<Button variant="link" as={Link} to="/auth/register">check</Button>)}
            </form >
            <button onClick={handleCart}>favorito</button>

        </>

    )
}






export default ArtworkDetail;
