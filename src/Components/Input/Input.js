import React, {Component} from 'react'


class Input extends Component{
  render(){
    const {onChange,urlNum}=this.props
  
    if(urlNum[urlNum.length-1] !== 6){
      return(
        <div>
         
          <input id="inputText" type='text' maxLength="1" name="input" autocomplete="off" onKeyPress={e => onChange(e)} id='wordInput' />
        </div>
         
  
      )
    }else{
      return(
        <div>
         <img id="gameover" src={require("../Image/images/gameover.png")} />
        </div>
  
      )
    }
    
  }
}

export default Input