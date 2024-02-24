
import React from 'react';
import './App.css'; // Import your custom CSS file

const Countdown = () => {
    function countdownTimeStart(){

        var countDownDate = new Date("Feb 26, 2024 15:00:00").getTime();
        
        // Update the count down every 1 second
        var x = setInterval(function() {
        
            // Get todays date and time
            var now = new Date().getTime();
            
            // Find the distance between now an the count down date
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            // Time calculations for days, hours, minutes and seconds
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Output the result in an element with id="demo"
            document.getElementById("demo").innerHTML = days + "d" + hours + "h "
            + minutes + "m " + seconds + "s ";
            
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);
        }

  return (
    <>
    <div className="container">
   <h1 className="count-heading"> Countdown</h1>
<div className="content">
<h3> READY TO LAUNCH IN</h3>
<div className="launch-time">
<div>
    <p id="demo"></p>
<span onClick={countdownTimeStart} className="start-countdown">Start Timer</span>  
</div>
</div>

<div className="small-paragraph">
    <h6>Sign up to find out more about the launch</h6>
</div>

<div className="sign-up-btn">
    <button className="sign-btn">Sign Up</button>
</div>
</div>
<img src="./images/rocket.svg" alt="rocket" className="rocket"/>
</div>


    </>
  );
};

export default Countdown;
