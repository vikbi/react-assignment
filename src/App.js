import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';
class App extends Component {

  constructor ( props) {
    super()
    this.getLength = this.getLength.bind(this);
    this.removeChar = this.removeChar.bind(this);
  }
  state = {
    length : 0,
    value : ""
  }

  getLength(event){
    let inputVal = event.target.value;
    let inputArr = inputVal.split('');
    this.setState({length : inputVal.length, value : inputArr});
  }

  removeChar(index){
    let charlist = [...this.state.value];
     charlist.splice(index,1);
    this.setState({value : charlist});
  }
  render() {
    let charList = []; let charComp = [];
    charList = [...this.state.value];
    charList.map((char, i) => {
      charComp.push(<CharComponent char={char} key={i} key1={i} removeChar={this.removeChar}/>)
    });
    return (
      <div>
       <input onChange={this.getLength} />
       <p>{this.state.length}</p>
      <ValidationComponent length={this.state.length} />
      { charComp }
      </div>
    );
  }
}

export default App;
