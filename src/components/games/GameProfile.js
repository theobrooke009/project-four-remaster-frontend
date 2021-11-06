import React from 'react'

import { useParams } from 'react-router-dom'
import { getAllGames, getOneGame, likeGame, getUser } from '../lib/api'
// import GameCard from './GameCard'
import CommentCard from './CommentCard'
import RecommendCard from './RecommendCard'
import UserReviewCard from './UserReviewCard'



function ShowOneGame() {
  const { gameId } = useParams()
  const [game, setGame] = React.useState(null)
  const [allGames, setAllGames] = React.useState(null)
  const [user, setUser] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const [content, setContent] =  React.useState('Recommendations')
  

  console.log(isError)
  console.log(user)


  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getOneGame(gameId)
        setGame(response.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [gameId])

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllGames()
        setAllGames(response.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  },[gameId])

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


  const OnClick = (e) => {
    console.log(e.target.textContent)
    if ( e.target.textContent.includes('Already purchased') || e.target.textContent.includes('Purchased')  ) {
      e.target.textContent = `Add to cart     £${game.price}`
    } else if (e.target.textContent.includes('Add to cart')){
      e.target.textContent = 'Purchased!'
    }

    return likeGame(gameId)
  }
  const filterByGenre = () => {
    if (game && allGames) {
      return allGames.filter( item => {
        return item.genre === game.genre && item.name !== game.name
      })
    }
  }

  const handleContent = (e) => {
    setContent(e.target.innerText)
    console.log(e.target.innerText)

  }

  
  return (
    <section>
      {game &&
      <div className="container profile-container">
        <div className="title-holder">
          <h1>{game.name}</h1>
        </div>
        <div className="columns">
          <div>
            {game ? 
              <div className="profile-details">
                <div className="column is-one-third">
                  <img src={game.image} alt={game.name}/> 

                  <div>
                    {user && game && !user.data.likedGames.some(e => e.name === game.name) &&
                  
                    <button className="like-button button is-info"
                      onClick={OnClick}>
                      <div>Add to cart</div><div>£{game.price}</div>
                    </button>
                    }
                  </div>

                  <div>
                    {user && game && user.data.likedGames.some(e => e.name === game.name)  &&
                  
                    <button className="like-button button is-info"
                      onClick={OnClick}>
                      <div>Already purchased</div>
                    </button>
                    }
                  </div>
                



                  <div> 
                    <h3
                      onClick={handleContent}
                    ><button className="like-button button is-info">Reviews</button></h3>
                    <h3
                      onClick={handleContent}>
                      <button className="like-button button is-info">Write a review</button>
                    </h3>


                    <h3
                      onClick={handleContent}
                    ><button className="like-button button is-info">Recommendations</button></h3>
                  </div>
                </div>
                <div className="column is-two-thirds info-column">
                  <div className="game-info">
                    <div>
                      <h2>| {game.platform} |</h2>
                    </div>
                    <div>
                      <h2> {game.fullGame} | </h2>
                    </div>
                    <div>
                      <h2> {game.size} GB | </h2>
                    </div>
                    <div>
                      <h2> {game.developer} | </h2>
                    </div>
                  </div>
                  <div className="game-outline">
                    <h2 clasName="info-title"> Game Info: </h2>
                    <div className="game-blurb">
                      <p>{game.gameInfo}</p>


                    </div>
                  </div>
                  <div>

                    <img className="rating" src={game.rating} />
                  </div>

                  <div>
                    <div className="reviews">
                      {content === 'Reviews' && allGames &&
                    <h2>User reviews for {game.name} :</h2>}
                      {content === 'Reviews' && allGames &&
                      <div className="user">{
                        game.comments.map(comment => {
                          return (
                            <CommentCard key={comment.id} comment={comment} />
                          )
                        })} </div>
                      }
                    </div>
                  </div>

                  <div className="review-div">
                    <div className="write-review">
                      {content === 'Write a review' && allGames &&
                    <h1 className="review-header">Write a review for {game.name}</h1>}
                      <div>
                        {content === 'Write a review' && allGames && <UserReviewCard key={game.id} game={game} />}
                      </div>
                    </div>
                  </div>

                  <div className="recommendations">
                    <div className="recom-container">
                      
                      {content === 'Recommendations' && allGames &&
                    <h1>You may also enjoy</h1>}
                      <div className="card-collection">
                        {content === 'Recommendations' && allGames &&
              filterByGenre().map(game => {
                return (
                  <RecommendCard key={game.id} game={game} />
                )
              })}
                      </div>
                    </div>

                    
                  </div>
                </div>
              </div> : '' }
          </div>
        </div>
      </div>}
    </section>
  )
}

export default ShowOneGame