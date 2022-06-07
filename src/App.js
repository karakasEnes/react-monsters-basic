import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchInput, setSearchInput] = useState('');

  console.log('RENDER*****');

  useEffect(() => {
    console.log('USE EFFECT for FETCH ...');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        console.log('UPDATE SET MONSTERS HAPPENED!');
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    console.log('USE EFFECT for Monster searchINPUT ...');
    const newFilteredData = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log('newFilteredData ', newFilteredData);

    console.log(newFilteredData === filteredMonsters);

    setFilteredMonsters(newFilteredData);
  }, [monsters, searchInput]);

  const onSearchChange = (e) => {
    setSearchInput(e.target.value.toLocaleLowerCase());
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className='monsters-search-box'
        placeholder='search for monsters'
        type='search'
        onSearchChange={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     console.log('APP constructor');
//     super();
//     this.state = {
//       monsters: [],
//       userInputValue: '',
//     };
//   }

//   componentDidMount() {
//     console.log('APP componentdid mount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (e) => {
//     this.setState(() => {
//       return { userInputValue: e.target.value.toLocaleLowerCase() };
//     });
//   };

//   render() {
//     const { monsters, userInputValue } = this.state;

//     const { onSearchChange } = this;

//     const filteredData = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(userInputValue.toLowerCase())
//     );

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           className='monsters-search-box'
//           placeholder='search for monsters'
//           type='search'
//           onSearchChange={onSearchChange}
//         />
//         <CardList monsters={filteredData} />
//       </div>
//     );
//   }
// }

export default App;
