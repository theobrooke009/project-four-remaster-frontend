import { Link } from 'react-router-dom'

function GameCard({ game }) {
  return (
    <div className="game-section">
      <Link to={`/games/${game.id}/`} key={game.id}>
        <div className="games-card">
          <div className="card-image">
            <figure className="image  menu-image">
              <img className="game-profile-image" src={game.image} alt={game.name} />
            </figure>
          </div>
          <div className="card-content">
            <h1 className="game-title">{game.name}</h1>
            <h3>{game.fullGame}</h3>
            <h3>{game.platform}</h3>
            <h1>{`£${game.price}`}</h1>
          </div>
        </div>
      </Link>
    </div>

  )
}
export default GameCard