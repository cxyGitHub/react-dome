import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>欢迎来到菜鸟教程</h2>
          </div>
          <p className="App-intro">

            <a href="http://react-guide.github.io/react-router-cn/docs/API.html">http://react-guide.github.io/react-router-cn/docs/API.html</a>
            你可以在<code>src/App.js</code> 文件中修改。
          </p>
        </div>
    );
  }
}

export default App;
