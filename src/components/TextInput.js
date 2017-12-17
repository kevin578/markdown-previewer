import React from 'react'

export default class TextInput extends React.Component {
    render() {
        return (
          <div>
          <textarea rows="4" cols="50" name = "textBox"
          onChange = {(e)=>{
            this.props.updateText(e.target.value);
          }}
          value = {this.props.inputText}
          />

          </div>
        );
      }    

}