import React from 'react'
import { useHistory } from 'react-router-dom'
import { createGame } from '../lib/api'

const initialState = {
  name: '',
  image: '',
  price: '',
  platform: '',
  genre: '',
  fullGame: '',
  gameInfo: '',
  size: '',
  releaseDate: '2021-09-16',
  developer: '',
  rating: '',
  isOfficial: false,
}

function GameNew() {
  const history = useHistory()
  const [formData, setFormData] = React.useState(initialState)
  const [formErrors, setFormErrors] = React.useState(initialState)


  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try { 
      const { data } = await createGame(formData)
      history.push(`/games/${data.id}`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className="new-game-section">
      <div className="new-game-container">
        <div className="columns new-game">
          <h1>Please fill in the below form to submit:</h1>
          <form
            className="column submit-form is-half box"
            onSubmit={handleSubmit}
          >

            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input 
                  className={`input ${formErrors.name ? 'is-danger' : ''}`}
                  placeholder="Title"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              {formErrors.name && (
                <p className="help is-danger">{formErrors.name}</p>
              )}
            </div>

            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <input 
                  className={`input ${formErrors.image ? 'is-danger' : ''}`}
                  placeholder="Image url"
                  name="image"
                  onChange={handleChange}
                  value={formData.image}
                />
              </div>
              {formErrors.image && (
                <p className="help is-danger">{formErrors.image}</p>
              )}
            </div>

            <div className="field">
              <label className="label">Price</label>
              <div className="control">
                <input 
                  className={`input ${formErrors.price ? 'is-danger' : ''}`}
                  placeholder="Price"
                  name="price"
                  onChange={handleChange}
                  value={formData.price}
                />
              </div>
              {formErrors.price && (
                <p className="help is-danger">{formErrors.price}</p>
              )}
            </div>


            <div className="field">
              <label className="label">Platform</label>
              <div className="control select">
                <select
                  className={`input ${formErrors.platform ? 'is-danger' : ''}`}
                  placeholder="Console (PS4/PS5 etc)"
                  name="platform"
                  onChange={handleChange}
                  value={formData.platform}
                >
                  <option value=""></option>
                  <option value="PS4">PS4</option>
                  <option value="PS5">PS5</option>
                </select>
              </div>
              {formErrors.platform && (
                <p className="help is-danger">{formErrors.platform}</p>
              )}
            </div>

            <div className="field">
              <label className="label">Genre</label>
              <div className="control">
                <input 
                  className={`input ${formErrors.genre ? 'is-danger' : ''}`}
                  placeholder="Genre (Action, RPG etc)"
                  name="genre"
                  onChange={handleChange}
                  value={formData.genre}
                />
              </div>
              {formErrors.genre && (
                <p className="help is-danger">{formErrors.genre}</p>
              )}
            </div>

            <div className="field">
              <label className="label">Is this a full game or a demo?</label>
              <div className=" select control">
                <select
                  className={`input ${formErrors.fullGame ? 'is-danger' : ''}`}
                  placeholder="Console (PS4/PS5 etc)"
                  name="fullGame"
                  onChange={handleChange}
                  value={formData.fullGame} 
                >
                  <option value=""></option>
                  <option value="Full Game">Full Game</option>
                  <option value="Add On">Add On</option>
                  <option value="Demo">Demo</option>
                </select>
              </div>
              {formErrors.fullGame && (
                <p className="help is-danger">{formErrors.fullGame}</p>
              )}
            </div>

            <div className="field">
              <label className="label">Game Info - please provide a brief overview</label>
              <div className="control">
                <textarea
                  className={`input ${formErrors.gameInfo ? 'is-danger' : ''}`}
                  placeholder="Info..."
                  name="gameInfo"
                  onChange={handleChange}
                  value={formData.gameInfo}
                />
              </div>
              {formErrors.gameInfo && (
                <p className="help is-danger">{formErrors.gameInfo}</p>
              )}
            </div>

            <div className="field">
              <label className="label">Size</label>
              <div className="control">
                <input 
                  className={`input ${formErrors.size ? 'is-danger' : ''}`}
                  placeholder="Size (in GB)"
                  name="size"
                  onChange={handleChange}
                  value={formData.size}
                />
              </div>
              {formErrors.size && (
                <p className="help is-danger">{formErrors.size}</p>
              )}
            </div>
            
            {/* <div className="field">
              <label className="label">Date Released</label>
              <div className="control">
                <input 
                  className={`input ${formErrors.releaseDate ? 'is-danger' : ''}`}
                  placeholder="YYYYMMDD"
                  name="releaseDate"
                  onChange={handleChange}
                  value={formData.releaseDate}
                />
              </div>
              {formErrors.releaseDate && (
                <p className="help is-danger">{formErrors.releaseDate}</p>
              )}
            </div> */}

            <div className="field">
              <label className="label">Developer Name</label>
              <div className="control">
                <input 
                  className={`input ${formErrors.developer ? 'is-danger' : ''}`}
                  placeholder="Developer Name"
                  name="developer"
                  onChange={handleChange}
                  value={formData.developer}
                />
              </div>
              {formErrors.developer && (
                <p className="help is-danger">{formErrors.developer}</p>
              )}
            </div>

            <div className="field">
              <label className="label">ESRB Rating</label>
              <div className="control">
                <select
                  className={`input ${formErrors.rating ? 'is-danger' : ''}`}
                  placeholder="Age Rating"
                  name="rating"
                  onChange={handleChange}
                  value={formData.rating}
                >
                  <option value=""></option>
                  <option value="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/ESRB_2013_Mature.svg/440px-ESRB_2013_Mature.svg.png">M</option>
                  <option value="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/ESRB_Teen.svg/430px-ESRB_Teen.svg.png">T</option>
                  <option value="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/ESRB_Everyone.svg/430px-ESRB_Everyone.svg.png">E</option>
                </select>
              </div>
              {formErrors.rating && (
                <p className="help is-danger">{formErrors.rating}</p>
              )}
            </div>

            <div className="field">
              <button type="submit" className="button is-info is-fullwidth">
                List my game
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )

}

export default GameNew