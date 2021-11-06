import React from 'react'
import { loginUser } from '../lib/api'
import { useHistory } from 'react-router-dom'
import logo  from '../../images/playstation-logo.png'
import psLogo from '../../images/ps-logo.png'
import { setToken } from '../lib/auth'


function Login() {

  const history = useHistory()
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  })

  const [isError, setIsError] = React.useState(false)

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await loginUser(formData)
      setToken(data.token)
      history.push('/games')
    } catch (err) {
      setIsError(true)
      console.log(isError)
    }
  }

  function handleRegister() {
    history.push('/register/')
  }

  return (
    <div className='register-container is-max-desktop'>
      <div className='join-message'>
        <h1>Join Playstation Network</h1>
      </div>
      <div className='header-container'>
        <div className='logo-container'>
          <img src={psLogo} className='ps-logo'/>
          <img src={logo} className='ps4-logo'/>
        </div>
        <div>
          <h2>Go Online by signing in to Playstation Network </h2>
        </div>
      </div>
      <div className='sign-in-form'>
        <form
          onSubmit={handleSubmit}>
          <div className='field'>
            <label className='label'>Online ID</label>
            <div className='control'>
              <input className='register-input'
                placeholder='Online ID'
                onChange={handleChange}
                name='username'/>
            </div>
          </div>
          <div className='field '>
            <label className='label'>Password</label>
            <div className='control'>
              <input className='register-input'
                type="password"
                placeholder='Password'
                onChange={handleChange}
                name='password'/>
            </div>
          </div>

          <button className='button is-info'>Sign In</button>
        </form>

        <button className='button is-info back-to-register'
          onClick={handleRegister}>New to Playstation Network? Create an Account</button>


      </div>
    </div>
  )
}

export default Login