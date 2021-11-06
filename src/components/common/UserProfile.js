import React from 'react'
import { getUser } from '../lib/api'
import { Link } from 'react-router-dom'
import UserGames from '../games/UserGames.js'
import profileStore from '../../images/ps-store.png'


function ShowUser() {
  // const { userId } = useParams()
  const [user, setUser] = React.useState(null)
  const [isError, setIsError] = React.useState(false)

  console.log(isError)
  console.log(user)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getUser()
        setUser(response)
      } catch (err) {
        setIsError(true)
      }
    } 
    getData()
  },[] )

  return (
    <div>
 
    

      <div className="user-games">
        {/* <div>
          <img src={ProfileStore} />
        </div> */}
        <div className="games-menu">
          <Link to="/games">
            <img className="store-image" src={profileStore} />
          </Link>
          {user &&
        user.data.likedGames.map(game => (
          <UserGames key={game.id} game={game}  />
        ))}
        </div>
      </div>
    </div>
  )
}

export default ShowUser