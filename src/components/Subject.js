import React, { Component } from 'react';

class Subject extends Component {
    render() { // class 안에서는 function을 생략해도 됨
      return (
        <header>
          <h1>{this.props.title}</h1>
          {this.props.sub}
        </header>
      );
    }
  }

export default Subject