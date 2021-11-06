import { Link } from 'react-router-dom'

function RecommendCard({ game }) {
  return (
    <div className="recommend-section">
      <Link to={`/games/${game.id}/`} key={game.id}>
        <div className="recommend-card ">
          <div className="card-image">
            <figure className="image">
              <img src={game.image} alt={game.name} />
            </figure>
          </div>
          <div className="recommend-content">
            <h2>{game.name}</h2>

          </div>
        </div>
      </Link>
    </div>

  )
}
export default RecommendCard