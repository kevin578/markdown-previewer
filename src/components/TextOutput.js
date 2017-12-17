import React from 'react'
import marked from 'marked';


export default class TextOutput extends React.Component {


    getMarkdownText() {
        var rawMarkup = marked(this.props.outputText, {sanitize: true});
        return { __html: rawMarkup };
      }

    render(){
            return <div className = "outputText" dangerouslySetInnerHTML={this.getMarkdownText()} />
    }
}
