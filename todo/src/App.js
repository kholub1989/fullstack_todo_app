import React, {Component} from 'react';
import TodoList from './TodoList'
import bg from './bg.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper"
      style={{ backgroundImage: `url(${bg})` }}>
      <div className="App">
          <TodoList />
        </div>
      </div>
    )
  }
}

export default App;
