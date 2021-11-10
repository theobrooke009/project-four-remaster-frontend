import React from 'react'
import GameCard from './GameCard'
import { getAllGames } from '../lib/api'
import Loading from '../common/Loading'
import Error from '../common/Error'

function GameStore() {
  const [games, setGames] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')
  const [devType, setDevType] = React.useState('AAA')
  // const [gameSort, setGameSort] = React.useState('Select filter')
  const isLoading = !games && !isError
  const [formData, setFormData] = React.useState({
    genre: 'Add Filter',
    sort: 'Select filter',
  })




  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllGames()
        setGames(response.data)
       
      } catch (err) {
        setIsError(true)
        console.log('error', err)
      }
    }
    getData()
  }, [])

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
    
    setSearchValue('')
  }

  const filterGames = () => {
    console.log(formData)
    if (formData) {
      return games.filter(game => {
        return game.genre.includes(formData.genre)
      })
    } 
  }

  const searchGames = () => {
    if (searchValue) {
      return games.filter(game => {
        return game.name.toLowerCase().startsWith(searchValue)
      })
    }
  }

  const setDev = (e) => {
    if (e.target.innerText === 'AAA Games'){
      setDevType('AAA')
    } else if (e.target.innerText === 'Indie Games'){
      setDevType('Indie')
    }
  }

  const filterDev = () => {
    if (games && devType === 'AAA') {
      return games.filter(game => {
        return game.isOfficial === true
      })
    } else if (games && devType === 'Indie') {
      return games.filter(game => {
        return game.isOfficial === false
      })
    } 
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
    setFormData({
      genre: 'Add Filter',
      sort: 'Select filter',
    })
  }

  

  const sortAlphabetical = () => {
    if (formData.sort === 'Name A-Z'){
      return games.sort((a, b) => a.name.localeCompare(b.name)) 
    } else if (formData.sort === 'Price Low-High') {
      return games.sort(function(a, b) {
        return parseFloat(a.price) - parseFloat(b.price)
      })
    } else if (formData.sort === 'Price High-Low') {
      return games.sort(function(a, b) {
        return parseFloat(b.price) - parseFloat(a.price)
      })
    }
  }

  
 


  
  

  return (
    <section className="store-section">
   
      <div className="search-things is-fluid"> 
        <button 
          className="button is-info"
          onClick={setDev}>
            AAA Games</button>
        <button 
          className="button is-info"
          onClick={setDev}
        >Indie Games</button>
        <div className="genre-select is-half">
          <div className="select">
            <select
              name="genre"
              value={formData.genre}
              onChange={handleChange}>
              <option value="Add Filter" disabled>Add Filter</option>
              <option value="Add Filter">All</option>
              <option value="Action">Action</option>
              <option value="Stealth Action">Platformer</option>
              <option value="RPG">RPG</option>
              <option value="Survival Horror">Survival Horror</option>
              <option value="Fighting">Fighting</option>
              <option value="Racing">Racing</option>
              <option value="First Person Shooter">First Person Shooter</option>
              <option value="Strategy">Strategy</option>
              <option value="Stealth Action">Stealth</option>
            </select>
          </div>

          <div>
            <input className="game-search-box"
              placeholder="Search"
              onChange={handleSearch}/>
          </div>

        </div>

        <div className="price-select is-half">
          <div className="select">
            <select
              name="sort"
              value={formData.sort}
              onChange={handleChange}>
              <option value="Select filter">Select filter</option>
              <option value="Name A-Z">Name A-Z</option>
              <option value="Price High-Low">Price High-Low</option>
              <option value="Price Low-High">Price Low-High</option>
            </select>
          </div>
        </div>

      </div>
      {games && formData.genre === 'Add Filter' && !searchValue && formData.sort === 'Select filter' &&
      <div className="games-container">
        {isError && <Error />}
        {isLoading && <Loading />}
        <div className="game-cards">
          {
            filterDev().map(game => (
              <GameCard key={game.id} game={game} />
            ))}
        </div>
      </div>}

      <div className="games-container hello">
        {isError && <Error />}
        {isLoading && <Loading />}
        <div className="game-cards">
          {games && searchValue &&
          searchGames().map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
      {games && formData.genre !== 'Add Filter'  &&
      <div className="games-container">
        <div className="game-cards">
          {
            filterGames().map(game => (
              <GameCard key={game.id} game={game} />
            ))}
        </div>
      </div>}

      <div className="games-container">
        <div className="game-cards">
          {games && formData.sort === 'Name A-Z'  &&
          sortAlphabetical().map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        <div className="game-cards">
          {games && formData.sort === 'Price Low-High'  &&
          sortAlphabetical().map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        <div className="game-cards">
          {games && formData.sort === 'Price High-Low'  &&
          sortAlphabetical().map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GameStore