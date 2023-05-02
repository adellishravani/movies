import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {actiondetails} = props
  const {thumbnailUrl, videoUrl} = actiondetails

  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button">
            <img src={thumbnailUrl} alt="movie name" />
          </button>
        }
      >
        {close => (
          <>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div>
              <ReactPlayer url={videoUrl} />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
