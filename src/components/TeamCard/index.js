import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teams} = props
  const {name, id, teamImageURL} = teams

  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="li-card">
        <img src={teamImageURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
