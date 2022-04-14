import React, {useState, useContext} from 'react'
import './_SearchBar.scss'
import {DataContext} from '../../contexts/DataContext'


const SearchBar = () => {
     const data = useContext(DataContext)
     const [artistName, setArtistName] = useState('')

    const handleChange = (event) => {
          setArtistName(event.target.value)
     }

     const searchArtists = (event) => {
          event.preventDefault()
          data.setQuery(artistName)
          setArtistName('')
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

