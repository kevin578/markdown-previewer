import React from 'react'

export default class TextInput extends React.Component {
    render() {
        return (
          <div className = "inputText">
          <textarea rows="35" cols="50" name = "textBox" className = "inputText__textarea"
          onChange = {(e)=>{
            this.props.updateText(e.target.value);
          }}
          value = {this.props.inputText}
          />

          </div>
        );
      }    

}