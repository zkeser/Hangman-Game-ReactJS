import React, {Component} from 'react'

class Image extends Component{
  render(){
    
    let num = this.props.urlNum[this.props.urlNum.length-1]
    if(num===undefined || num===1){
      return(<div></div>

    )
    }

    return(<div className="container">
      <img id="two" src={require(`../Image/images/hangman${num}.png`)}/>
    
    </div>
    

    )
  
  
  }
}

export default Image

// {require("../Image/images/4.jpg")}