import React, { Component } from 'react';

class Subject extends Component {
    render() { // class 안에서는 function을 생략해도 됨
      return (
        <header>
          <h1>
            <a href='/' onClick={function(e){
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}>{this.props.title}
            </a>
          </h1>
        </header>
      );
    }
  }

export default Subject