
import './about.css'

const FloatingImage = ({image, txt1, txt2}) => {
  return (
    <div className="floating">
        <span>
            {txt1}
            <br />
            {txt2}
        </span>
        <img src={image} alt={image} />
    </div>
  )
}

export default FloatingImage