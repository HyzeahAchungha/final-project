import React from "react"
import "./card.css"
const Card = ({ title, imageUrl, body }) => {
  return (
    <div className="m-5 base d-sm-12 d-sm-block lg-6 ">
   
       <div className="card-container  text-start">
      <div className="image-container">
        <img className="image-fluid" src={imageUrl} alt="" style={{width:"100%"}}/>
        
      </div>

      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>

        </div>
        <div className="card-body">
          <p>{body}</p>

        </div>
      </div>
      <div className="btn">
        <button>
          <a className="text-decoration-none" href="./Specialist">See Specialist</a>
        </button>
      </div>




    </div>
    </div>
   
  )
}
export default Card