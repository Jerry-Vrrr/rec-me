import React, {useState} from 'react'
import './_SearchBar.scss'


const SearchBar = () => {

     const [artistName, setArtistName] = useState('')

    const handleChange = (event) => {
          setArtistName(event.target.value)
     }

     const searchArtists = (event) => {
          event.preventDefault()
          

          
     }

     return(
          <form onSubmit={event => searchArtists(event)}>
               <input 
               type='text'
               placeholder='search artist name'
               name='artist-name'
               value={artistName}
               required
               onChange={event => handleChange(event)}
               />
               <button>Submit</button>
          </form>
     )
     
}

export default SearchBar;

