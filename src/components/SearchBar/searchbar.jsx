
// const Searchbar = ({ artists, setSearchResults }) => {

//     const handleSubmit = (event) => {
//         event.preventDefault()
//     }

//     const handleSearchChange = (event) => {
//         if (!event.target.value) return setSearchResults(artists)

//         const resultsArray = artists.filter(artist => artist.name.includes(event.target.value) || artist.lastName.includes(event.target.value))

//         setSearchResults(resultsArray)
//     }


//     return (
//         <header>
//             <form className="search" onSubmit={handleSubmit}>
//                 <input
//                     className="search-input"
//                     type="text"
//                     id="search"
//                     onChange={handleSearchChange}
//                 />
//                 <button className="search-button">check</button>

//             </form>
//         </header>

//     )

// }

// export default Searchbar