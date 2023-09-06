import React from 'react';
import "../styles/Feedback.css";
import fimg from "../images/grayscale-photo-woman-house.jpg"
function Feedback() {
  return (
    <div className='feedback-main' id='feedback'>
    <div className="feedback-img">
        <img src={fimg} alt="" />
    </div>
    <div className="feedback-form">
        <form>
            <label htmlFor="mail">Email </label>
            <br />
            <input type="email" name="mail" id="mail" placeholder='Enter a valid email'/>
            <br/>
            <label htmlFor="add">Address</label>
            <br />
            <input type="text" name="add" id="add" placeholder='Enter your address'/>
            <br/>
            <select name="item" id="item">
                <option value="item1">Item1</option>
                <option value="item2">Item2</option>
                <option value="item3">Item3</option>
            </select>
            <br />
            <div id='check'>
            <input type="checkbox" name="terms" id="terms" /> I accept the <a href="#"> Terms of Services</a>
            </div>
            <br />
            <button type="submit">SUBMIT</button>
        </form>
    </div>
    </div>
  )
}

export default Feedback