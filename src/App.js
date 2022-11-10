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
      mode:'read',
      seleceted_content_id:2,
      subject:{title:'WEB', sub:'world wide web!'},
      welcome:{title:"Welcome", desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText ...'},
        {id:2, title:'CSS', desc:'CSS is for design ...'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive ...'}
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if(this.state.mode==='welcome'){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
    }
    else if(this.state.mode==='read'){
      var i = 0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id===this.state.seleceted_content_id){
          _title=data.title;
          _desc=data.desc;
          break;
        }
        i=i+1;
      }
    }
    return (
      <div className = "App">
        <Subject 
        title={this.state.subject.title} // 상위 state값을 하위 props의 값으로 사용
        sub={this.state.subject.sub}
        onChangePage={function(){
          if(this.state.mode==='welcome'){
            this.setState({
              mode:'read'
            })
          }
          else if(this.state.mode==='read'){
            this.setState({
              mode:'welcome'
            })
          }
        }.bind(this)}
        >
        </Subject>
        
        <Subject title="React" sub="For UI!!"></Subject>
        <Toc onChangePage={function(id){
          this.setState({
            mode:"read",
            seleceted_content_id:Number(id)
          });
        }.bind(this)}
        data={this.state.contents}></Toc>
        <Contents title={_title} desc={_desc}></Contents>
      </div>
    );
  }
}

export default App;
