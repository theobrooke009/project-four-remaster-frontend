import React from 'react'
import psPlus from '../../images/ps-plus.png'
import { isAuthenticated, removeToken } from '../lib/auth.js'
import { useHistory } from 'react-router-dom'
import { getUser } from '../lib/api'

function UserNavbar () {
  const isAuth = isAuthenticated()
  const history = useHistory()
  const [user, setUser] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  console.log(isError)
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

  const handleLogout = () => {
    removeToken()
    history.push('/login')
  }

  return (
    <navbar className="user-nav">
      <div className="user-nav columns">
        <div className="plus-image column is-one-third">
          <img className="plus" src={psPlus} />
        </div>
        <div className="user-details column is-one-third">
          <div>
            {user &&
    <img className="profile-image" src={user.data.profileImage} />
            }
    
          </div>  
          <div>
            {user &&
    <h1>{user.data.username}</h1>
            }
          </div>
        </div>
        <div className="column is-one-third navbar-end logout">
          {isAuth && (
            <button className="button is-info user-prof-log-out" onClick={handleLogout}>
                    Log Out
            </button>
          )}
        </div>
      </div>
  
    </navbar>
  )
}

export default UserNavbar