import React from 'react';
import "../styles/Services.css";
// import bg from "../images/portrait-young-office-worker-with-laptop-sitting-table-isolated-white.jpg";

function Services() {
  return (
    <div className='services'>
        <span id='greet'>WELCOME</span>
        <span id='heading'>Our Services</span>
        <span id='info'>Our management consulting services focus on our clients' most critical issues and opportunities.</span>
        <div className="main-content">
            <div className="c">
                <h5>Business Consultation</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit magni voluptatum ducimus nostrum at rerum, ea mollitia. Temporibus facilis omnis enim nulla sunt consequatur, obcaecati porro voluptatem, dolor alias eum  
                <a href="#">more</a></p>
            </div>
            <div className="c">
                <h5>Investments</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit magni voluptatum ducimus nostrum at rerum, ea mollitia. Temporibus facilis omnis enim nulla sunt consequatur, obcaecati porro voluptatem, dolor alias eum.   
                <a href="#">more</a></p>
            </div>
        {/* <img src={bg} alt="" /> */}
        <div className="c">
                <h5>Anti-Crisis</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit magni voluptatum ducimus nostrum at rerum, ea mollitia. Temporibus facilis omnis enim nulla sunt consequatur, obcaecati porro voluptatem, dolor alias eum.   
                <a href="#">more</a></p>
            </div>
            <div className="c">
                <h5>Marketing Research</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit magni voluptatum ducimus nostrum at rerum, ea mollitia. Temporibus facilis omnis enim nulla sunt consequatur, obcaecati porro voluptatem, dolor alias eum 
                <a href="#">more</a></p>
            </div>
        </div>
    </div>
  )
}

export default Services
