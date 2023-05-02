import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movieslist} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  const actionlist = movieslist.filter(each => each.categoryId === 'ACTION')
  const comedylist = movieslist.filter(each => each.categoryId === 'COMEDY')

  return (
    <div>
      <h1>Action Movies</h1>
      <Slider {...settings}>
        <MovieItem actiondetails={actionlist} />
      </Slider>

      <h1>Comedy Movies</h1>
      <Slider {...settings}>
        <MovieItem actiondetails={comedylist} />
      </Slider>
    </div>
  )
}

export default MoviesSlider
