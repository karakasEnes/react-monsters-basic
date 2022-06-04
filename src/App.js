import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    console.log('constructor');
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    console.log('componentdid mount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log('state', this.state);
          }
        )
      );
  }

  render() {
    console.log('render');
    return (
      <div className='App'>
        <input
          onChange={(e) => {
            const userInput = e.target.value;

            console.log(userInput);

            const filteredData = this.state.monsters.filter((monster) =>
              monster.name.toLowerCase().includes(userInput.toLowerCase())
            );

            this.setState(() => {
              return { monsters: filteredData };
            });
          }}
          className='search-box'
          type='search'
          placeholder='Search for Monsters'
        />
        {this.state.monsters.map((monster, index) => {
          return (
            <div key={index}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
