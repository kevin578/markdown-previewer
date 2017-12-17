import React, { Component } from 'react';
import Header from './Header'; 
import TextInput from './TextInput';
import TextOutput from './TextOutput';


class App extends Component {
  constructor(){
    super();
    this.updateText = this.updateText.bind(this);
    this.state = {
    inputText: 'There is Text here'
  }
}

  updateText(text) {
    this.setState(() => ({ inputText: text }));
  }

  render() {
    return (
      <div className = "app">
      <Header />
      <TextInput 
      inputText = {this.state.inputText}
      updateText = {this.updateText}
      />
      <TextOutput outputText = {this.state.inputText}/>
      </div>
    );
  }
}

export default App;
