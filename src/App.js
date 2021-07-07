import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }

  useEffect(()=>{
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response=> setCountries(response.data))
    .catch(error => 'there occur error examination')
  }, [])
  
  const filt = countries.filter(countri =>{
    return countri.name.toLowerCase().includes(search.toLowerCase())
  })
  console.log(filt.length)
  
  return(
    <div>
      <label>find countries</label>
      <input type="search" onChange={handleSearch} value={search}/>
      <ul>
        {filt.map(country => <li key={country.name}>{country.name}</li>)}
      </ul>
      
    </div>
  )
  
  
}

export default App
