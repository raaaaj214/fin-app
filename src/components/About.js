import React, { useEffect, useState } from 'react';
import "../styles/About.css";
import { useSpring, animated } from '@react-spring/web'
import ScrollTrigger from 'react-scroll-trigger';

function Number({n}) {
    
    const { number} = useSpring ({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed (0))}</animated.div>;
}

export default function About() {
    const [isVisible,setvisible] = useState(false);
  return (
    <>
    <div className='about' id='about'> 
        <div className="a-heading">
            About Us & Work
        </div>
            <ScrollTrigger onEnter={() => {setvisible(true)}} onExit={()=>{setvisible(false)}}>
        <div className="a-descp">
            <p>We provide expert Business Coaching to both individuals and businesses. With over 30 years of experience we’ll ensure that you’re always getting the best guidance from the top people in the entire industry.</p>

        </div>
      <div className="a-ani">
             <div className="a-box">
                {isVisible && <h1 ><Number n={17}/></h1>}
                <p>SPECIALIST</p>
            </div>
            <div className="a-box">
               {isVisible && <h1><Number n={700}/></h1>}
                <p>CLIENTS</p>
            </div>
            <div className="a-box">
               {isVisible && <h1><Number n={37}/></h1> }
                <p>CASES</p>
            </div>
            <div className="a-box">
               {isVisible && <h1><Number n={40}/></h1>}
                <p>AWARDS</p>
            </div>
        </div>
            </ScrollTrigger>
    </div>
            <div className="about-info">
                <div className="s s1">
                        <h1>Business Plan Services</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorem harum quidem facere saepe architecto amet quam totam, eaque voluptatum dignissimos earum nostrum perferendis deserunt est, quasi et laboriosam recusandae ullam quaerat. Optio alias repudiandae dolores quisquam cupiditate quod sapiente, ullam nostrum adipisci illum esse vero laboriosam nobis. Ut, eveniet? Quos consequatur vel, error libero distinctio aliquam at suscipit, amet sunt excepturi expedita tempora.</p>
                </div>
                <div className="s s2">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus error qui quia exercitationem libero similique voluptatem, voluptates quasi consequuntur dignissimos! Atque, quo quam.</p>
                    <button id='a-btn'>Learn More</button>
                </div>
            </div>
            </>
  )
}
