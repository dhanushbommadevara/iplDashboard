import {Component} from 'react'

import './index.css'

class MatchCard extends Component {
  getMatchStyle = matchStatus => {
    if (matchStatus === 'Won') {
      return 'match-won'
    }
    return 'match-lost'
  }

  render() {
    const {matchData} = this.props
    const {competingTeamLogo, competingTeam, matchStatus, result} = matchData
    const matchClassName = `match-status ${this.getMatchStyle(matchStatus)}`

    return (
      <li className="match-card">
        <img
          src={competingTeamLogo}
          alt={`competing-team ${competingTeam}`}
          className="team-logo"
        />
        <p className="team-name">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={matchClassName}>{matchStatus}</p>
      </li>
    )
  }
}
export default MatchCard
