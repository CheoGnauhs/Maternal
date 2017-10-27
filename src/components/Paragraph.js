import React from 'react';

class Paragraph extends React.Component{
  render(){
    return(
        <div className="quesBlock">
          <div className="question">Q:{this.props.question}</div>
          <div className="answer">A:{this.props.answer}</div>
        </div>
    );
  }
}

export default Paragraph;