import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'
import './index.css'

const url = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {isLoading: true, teamsData: []}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch(url)
    const fetchedData = await response.json()
    const updatedData = fetchedData.teams.map(team => ({
      name: team.name,
      id: team.id,
      teamImageURL: team.team_image_url,
    }))
    this.setState({teamsData: updatedData, isLoading: false})
  }

  renderTeamList = () => {
    const {teamsData} = this.state

    return (
      <ul className="teams-list">
        {teamsData.map(item => (
          <TeamCard teams={item} key={item.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="spinner">
      <Loader type="Oval" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        <div className="teams-container">
          <div className="ipl-image-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl-logo"
              className="ipl-banner"
            />
            <h1 className="ipl-heading">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderTeamList()}
        </div>
      </div>
    )
  }
}
export default Home
