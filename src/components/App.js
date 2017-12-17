import React, { Component } from 'react';
import Header from './Header'; 
import TextInput from './TextInput';
import TextOutput from './TextOutput';


class App extends Component {
  constructor(){
    super();
    this.updateText = this.updateText.bind(this);
    this.state = {
    inputText: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n "+
    "\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a " +
    "\nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n"+
    "\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n"+
    "The rain---not the reign---in\nSpain."
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
