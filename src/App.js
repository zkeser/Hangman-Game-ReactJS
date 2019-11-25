import React, { Component } from 'react';
import './App.css';
import words from './words/words'
import Word from './Components/Word/Word'
import Image from './Components/Image/Image'
import Input from './Components/Input/Input'


class App extends Component {
  state ={
      puzzle: '',
      guessedLetters:[],
  
    }
  
 getWord(){
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
   const wordsDict = []
   for(var i = 0; i<words.length;i++){
     wordsDict.push(words[i].toLowerCase())
   }
   return wordsDict[getRandomInt(wordsDict.length)]
 }
 
 startGame(){
  return this.setState({
    puzzle: this.getWord().toString(),
    guessedLetters:[],
  })
}


 displayWord(){
  var displayWord = Array(this.state.puzzle.length).fill('_')
  if(Array.isArray(this.state.guessedLetters) && this.state.guessedLetters.length){
    this.getNumOfWrongGuesses()
  displayWord= Array(this.state.puzzle.length).fill('_') 
  for(var i=0;i<this.state.puzzle.length;i++){
    for(var j=0; j<this.state.guessedLetters.length;j++){
      if(this.state.puzzle[i].toLowerCase()===this.state.guessedLetters[j]){
        displayWord[i] = this.state.puzzle[i]
      }
    }
  }
    
  }

  return displayWord
}

handleChange= (e) => {
    const{value}=e.target
    if(e.key === "Enter"){
      const oldState = this.state.guessedLetters
    if(!this.checkUsedLetters(value)){
      oldState.push(value)
    }
    this.setState({guessedLetters: oldState})
  }
    
  }

  checkUsedLetters(letter){
    if(this.state.guessedLetters.includes(letter)){
      alert(`${letter} has already been used.`)
      return true
    }
    return false
  }

 getNumOfWrongGuesses(){
  var imgcount =1
  if(this.state.guessedLetters.length > 0){
   return this.state.guessedLetters.map((x) =>{
    if(!this.state.puzzle.includes(x)){
      imgcount++
    }
    return imgcount
  }) 
  }else if(this.state.puzzle===''){
    imgcount =1
    return imgcount
  }
  else{
    return imgcount
  }
  
  }





  render(){

    return (
      <div className="App">
       <h1 className='h1Tag'>Hangman Game</h1><br/>
       <Input urlNum={this.getNumOfWrongGuesses()}onChange={this.handleChange} urlNum={this.getNumOfWrongGuesses()}  /><br/>
      <Word word={this.displayWord()} onClick={this.startGame.bind(this)}/><br/>
      <Image urlNum={this.getNumOfWrongGuesses()} />
      </div>
    );
  }
  
}

export default App;
