import { AuthContext, LOCAL_STORAGE_AUTH } from '../../context/auth.context';
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArtWorksAPI from '../../services/artworks.service'
import ArtworkCard from '../../components/ArtworkCard/ArtworkCard'
import StripeAPI from '../../services/stripe.service'
import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import AuthAPI from '../../services/auth.service'


const ArtworkDetail = () => {
    const { id } = useParams()
    const [artwork, setArtwork] = useState(undefined);
    const { isLoggedIn } = useContext(AuthContext);
    const [cart, setCart] = useState([]);

    const handleCart = () => {
        AuthAPI.cartUpdate({ cart: artwork }, localStorage.getItem(LOCAL_STORAGE_AUTH)).then(() => {
            // console.log(AuthAPI.cartUpdate)
            // setArtwork(artwork.cart)
        })
    }
    // AuthAPI.cartUpdate()


    const artworkCart = () => {
        console.log(artwork)
        const addToCart = (artwork) => {
            setCart([...cart, artwork])
        }

    }






    const handleCheckout = (event) => {
        event.preventDefault()
        const body = { name: artwork.name, price: artwork.price, success_url: "https://gallery-session-client.vercel.app", cancel_url: "https://gallery-session-client.vercel.app" }
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
                    <Button variant="submit" onClick={handleCheckout}>Comprar</Button>)
                    : (<Button variant="submit" as={Link} to="/auth/register">Comprar</Button>)}
            </form >
            {/* <button onClick={handleCart}>Add</button> */}

        </>

    )
}






export default ArtworkDetail;
