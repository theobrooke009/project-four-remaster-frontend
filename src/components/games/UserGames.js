import { Link } from 'react-router-dom'

function GameCard({ game }) {
  return (
    <div className="user-game-section">
      <Link to={`/games/${game.id}/`} key={game.id}>
        <div className="user-games-card">
          <div className="user-card-image">
            <figure className="menu-image">
              <img src={game.image} alt={game.name} />
              <p className="start-game">Start Game</p>
            </figure>
          </div>
        </div>
      </Link>
    </div>

  )
}
export default GameCard