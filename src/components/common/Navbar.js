import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { isAuthenticated, removeToken } from '../lib/auth.js'
import psLogo from '../../images/ps-logo.png'

function Navbar() {
  const isAuth = isAuthenticated()
  const { pathname } = useLocation()
  const history = useHistory()
  const [isOpen, setIsOpen] = React.useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handleLogout = () => {
    removeToken()
    history.push('/login')
  }

  return (
    <nav className="navbar is-transparent">
      <div className="container">
  
        <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <div className="navbar-brand">
            <Link to="/games" className="navbar-item">
              <img src={psLogo} className="ps-logo" />
            </Link>
            <span
              className={`navbar-burger ${isOpen ? 'is-active' : ''}`}
              onClick={handleToggle}
            >
            </span>
          </div>

          <div className="navbar-start">
            {isAuth && (
              <Link to="/profile/" className="navbar-item">
                Profile
              </Link>
            )}
            {isAuth && (
              <Link to="/games/new/" className="navbar-item">
                Submit a Game
              </Link>
            )}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!isAuth && (
                  <>
                    <Link to="/register" className="button is-info">
                      Register
                    </Link>
                    <Link to="/login" className="button is-info">
                      Login
                    </Link>
                  </>
                )}
                {isAuth && (
                  <button className="button is-info" onClick={handleLogout}>
                    Log Out
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
