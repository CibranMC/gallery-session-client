import { useState } from "react"

const Searchbar = ({ setFilterArtists, filterArtists }) => {

    const handleInput = (event) => {
        setFilterArtists(event.target.value)
    }
    // const filterArtists = (event) => {
    //     // const [filterArtists, setFilterArtists] = useState()
    //     const { value } = event.target
    //     let _artists = [...artists]
    //     _artists = artists.filter(artist => artist.name.toLowerCase().includes(value.toLowerCase()))
    //     setFilter(_artists)
    // }

    return (<input type="text" name="artist" onChange={handleInput} value={filterArtists} />)

}

export default Searchbar