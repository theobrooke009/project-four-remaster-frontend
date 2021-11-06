import React from 'react'
import { registerUser } from '../lib/api.js'
import { useHistory } from 'react-router-dom'

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  profileImage: '',
}

function Register() {

  const history = useHistory()
  const [formData, setFormdata] = React.useState(initialState)
  const [formErrors, setFormErrors] = React.useState(initialState)

  const handleChange = e => {
    setFormdata({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await registerUser(formData)
      history.push('/login')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='register-container is-max-desktop'>
      <div className='join-message'>
        <h1>Sign In to Playstation Network</h1>
      </div>
      <div className='form'>
        
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
          <div className='field'>
            <label className='label'>Email Address</label>
            <div className='control'>
              <input className='register-input'
                placeholder='Email Address'
                onChange={handleChange}
                name='email'/>
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
          <div className='field'>
            <label className='label'>Password Confirmation</label>
            <div className='control'>
              <input className='register-input'  
                type="password"
                placeholder='Password Confirmation'
                onChange={handleChange}
                name='passwordConfirmation'/>
            </div>
          </div>
          <div className='field'>
            <label className='label'>Profile Image</label>
            <div className='control'>
              <input className='register-input'
                placeholder='Paste image url here'
                onChange={handleChange}
                name='profileImage'/>
            </div>
          </div>
          <button className='button is-info'>Register</button>
        </form>


      </div>
    </div>
  )
}

export default Register