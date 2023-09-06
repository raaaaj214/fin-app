import React, { useState } from 'react';
import "../styles/Clients.css";
import himg from "../images/My project-1.png";
import ClientsInfo from './ClientsInfo';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function Clients() {
  const [toggle,settoggle] = useState(false)
  const info = [
    {
        p : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ut voluptates dolorum perferendis est suscipit ad officia excepturi libero voluptas?",
        name : "Krishna Jagtap"
    },
    {
        p : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum neque autem, cupiditate nobis temporibus eveniet ipsa ut itaque pariatur est officia repellat ",
        name : "Raj Deshmukh"
    }
]
  console.log(info)
  return (
    <div className='clients-main'>
      <div className="clients-left">
        <img src={himg} alt="" />
      </div>
      <div className="clients-right">
        <Carousel showThumbs={false} showStatus={false} interval={5000} infiniteLoop={true} showArrows={false} autoPlay={true} width={'clamp(20rem,40vw,40rem)'}>
          <ClientsInfo p={info[0].p} name={info[0].name}/>
          <ClientsInfo p={info[1].p} name={info[1].name}/>
        </Carousel>
      </div>
      
    </div>
  )
}

export default Clients
