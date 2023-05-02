import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
        <MoviesSlider movieslist={moviesList} />
      </div>
    )
  }
}

export default PrimeVideo
