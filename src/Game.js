import React, { useState } from "react";
import "./Game.css";
import Win from "./Win";
import Low from "./Low";
import High from "./High";
import Lose from "./Lose";
function Game({WinningNumber}) {
  

  let [counter, setcounter] = useState(0);
  const Flag = false;
  const [showComponent, setshowComponent] = useState("")
  const [EnteredValue, setEnteredValue] = useState(0);
  console.log(counter);
  console.log('Winning Number',WinningNumber);
  console.log('Entered Number',typeof EnteredValue);
  return (
    
    <div>
      <input
        type="text"
        
        name="EnteredValue"
        value={EnteredValue}
        onChange={(e) => {
          setEnteredValue(e.target.value);
        }}
      />
      <div>
        <button
          variant="outlined"
          type="submit"
          onClick={() => {            
              if (counter < 10) {
                if (EnteredValue == WinningNumber) {                                   
                  counter=counter+1;
                  setcounter(counter);
                  setshowComponent('win')                  
                  
                } else if (EnteredValue < WinningNumber) {
                  counter=counter+1;
                  setcounter(counter);
                  setshowComponent('low')
                } else if (EnteredValue > WinningNumber) {
                  counter=counter+1;
                  setcounter(counter);
                  setshowComponent('high')
            } 
          }}} >
          
          'Try Me!!'
        </button>  
        <div>        
        
        {showComponent=== 'win'? <Win/>: null }
        {showComponent=== 'low'? <Low/>: null }
        {showComponent=== 'high'? <High/>: null }
        {counter>=10? <Lose/>: null }
        
       </div>
      </div>
      <div>
 
      </div>
    </div>
  );
  
}

export default Game;
