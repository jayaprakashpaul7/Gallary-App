// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailUrl, thumbnailAltText, id, getFilterdImages} = props

  const onActive = () => {
    getFilterdImages(id)
  }

  return (
    <li>
      <img
        src={thumbnailUrl}
        className="thumbnail-img"
        alt={thumbnailAltText}
        onClick={onActive}
      />
    </li>
  )
}

export default ThumbnailItem
