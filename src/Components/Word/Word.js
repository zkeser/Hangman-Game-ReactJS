import React, { Component } from 'react'
import { white } from 'ansi-colors'

class Word extends Component{
 
  render(){
    
    const mystyle = {
      color: "orangered",
      fontFamily: 'Chelsea Market, cursive',
    };

    function alphanumeric(inputtxt){
      var letterNumber = /^[0-9a-zA-Z]+$/;
      if(inputtxt.match(letterNumber)) 
       {
        return true;
       }
     else
       { 
        return false; 
       }
      }
     if(alphanumeric(this.props.word.join(''))===true){
      return(
        <div>
          <h1 style={mystyle} >You win!</h1>
          <button onClick={this.props.onClick}>Generate Word</button>
        </div>
        
        )
     }
   
    return(
      <div>
        <h1 style={mystyle} >{this.props.word}</h1>
        <button onClick={this.props.onClick}>Generate Word</button>
      </div>
      
      )
  }
  
}

export default Word