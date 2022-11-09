import React, { Component } from 'react';
import Toc from "./components/Toc"
import Contents from './components/Contents';
import Subject from './components/Subject';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    // componet init (component 동작시 최초로 실행됨)
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'world wide web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText ...'},
        {id:2, title:'CSS', desc:'CSS is for design ...'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive ...'}
      ]
    }
  }

  render(){
    return (
      <div className = "App">
        <Subject 
        title={this.state.subject.title} // 상위 state값을 하위 props의 값으로 사용
        sub={this.state.subject.sub}>
        </Subject>
        
        <Subject title="React" sub="For UI!!"></Subject>
        <Toc data={this.state.contents}></Toc>
        <Contents title="HTML" desc="HTML is HyperText Markup Language."></Contents>
      </div>
    );
  }
}
export default App;
