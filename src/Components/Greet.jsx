import React from 'react';
import ReactDOM from 'react-dom/client';
//import '../../src/index.js'

const heading = {
    color: 'red',
  textAlign : 'center',
  textTransform : 'capitalize',
  margin : '250'
  
}

const h = {
    color : 'orange',
    textAlign: 'center',
    fontFamily: 'sans-serif'
}

const res = {
    color : ' green'
}

function Greet () {
    var today = new Date();
var time = today.getHours();

var response =checkTime(time)
console.log(time);
var dum = "good morning";
function checkTime(curTime)
{
  console.log(curTime);
  if(curTime>1 && curTime<12)
  {
    return "Good Morning";
  }
  else
  if(curTime >12 && curTime < 16)
  {
    return "Good Afternoon";
  }
  else
  if(curTime > 16 && curTime < 25)
  {
    return " Good Night";
  }
}

return (
    
    <>
      <h1 style={h}>Result is show as below</h1>
    <h1 style={heading}> Hello Adarsh, <span style={res}>{response}</span> </h1>
  
    </>
);




}

export default Greet;