import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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

    return (
      <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          className='monsters-search-box'
          placeholder='search for monsters'
          type='search'
          onSearchChange={onSearchChange}
        />
        <CardList monsters={filteredData} />
      </div>
    );
  }
}

export default App;
