import { useState } from "react";
import likebtn from "./Assets/like-button.png"
import heart from "./Assets/heart.png"
import heart2 from "./Assets/heart2.png"


const Card = ({
  img,
  name,
  title,
}) => {
  const [noOfLikes, setNumberOfLikes] = useState(0);
  const [fav, setFav] = useState(false);

  return (
    <div className="card-container" >
      <div className="card">
        <img src={img} alt="Avatar" style={{
          width: '50%',
          height: '400px',
          borderRadius: '30px',
        }} />
        <button onClick={() => setFav(!fav)} style={{ marginLeft: '10px', border: 'none', background: 'none' }}>
          {fav ? <img src={heart} alt="" style={{ width: '25px', height: '25px' }} /> : <img src={heart2} alt="" style={{ width: '25px', height: '25px' }} />}
        </button>
        <div className="container">
          <h4><b>{title}</b></h4>
          <p>{name}</p>
          <button onClick={() => setNumberOfLikes(noOfLikes + 1)} style={{border: 'none', background: 'none' }}>
            <img src={likebtn} alt="" style={
              {
                width: '24px',
                height: '24px',
              }
            } />
            <p>{noOfLikes}</p>
          </button>
        </div>
      </div>
    </div >
  )
}

export default Card;