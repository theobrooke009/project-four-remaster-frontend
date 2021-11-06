import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { createComment } from '../lib/api'

const initialState = {
  text: '',
}

function UserCommentCard() {
  const { gameId } = useParams()
  const history = useHistory()
  const [formData, setFormData] = React.useState(initialState)
  const [formErrors, setFormErrors] = React.useState(initialState)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value, games: parseInt(gameId) })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
 
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await createComment(gameId, formData)
      history.push(`/games/${gameId}`)
      location.reload()
      
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <section className="review-section">
      <div className="container">
        <div className="columns">
          <form
            className="column text-container"
            onSubmit={handleSubmit}>
            <div className="field">
            
              <div className="post-review">
                <textarea
                  className={`text-box input ${formErrors.text ? 'is-danger' : ''}`}
                  placeholder="Write your review here..."
                  name="text"
                  onChange={handleChange}
                  value={formData.text}
                />
        
              </div>
              {formErrors.text && (
                <p className="help is-danger">{formErrors.text}</p>
              )}
            </div>
            <div className="field">
              <button 
                type="submit" 
                className="button is-info is-fullwidth"
                placeholder="Leave your review...">
                Leave Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserCommentCard