import React from 'react'
import quotes from "../images/icons8-get-quote-50.png"
import "../styles/Clients.css"

function ClientsInfo(props) {
  return (
    <div className='clients-in-right'>
        <div className="clients-imgg">
       <img src={quotes} alt=""  id='clients-right-img'/>
       </div>
            <div className="clients-right-content">
                <h6>Our Clients Say</h6>
                <p>{props.p}</p>
            </div>
            <div className="clients-right-person">
                <h6 id='crp1'>{props.name}</h6>
                <h6 id='crp2'>HAPPY CLIENT</h6>
            </div>
    </div>
  )
}

export default ClientsInfo
