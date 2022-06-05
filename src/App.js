import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    console.log('APP constructor');
    super();
    this.state = {
      monsters: [],
      userInputValue: '',
    };
  }

  componentDidMount() {
    console.log('APP componentdid mount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (e) => {
    this.setState(() => {
      return { userInputValue: e.target.value.toLocaleLowerCase() };
    });
  };

  render() {
    const { monsters, userInputValue } = this.state;

    const { onSearchChange } = this;

    const filteredData = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(userInputValue.toLowerCase())
    );

    console.log('APP render');
    return (
      <div className='App'>
        <input
          onChange={onSearchChange}
          className='search-box'
          type='search'
          placeholder='Search for Monsters'
        />

        <CardList monsters={filteredData} />
      </div>
    );
  }
}

export default App;
