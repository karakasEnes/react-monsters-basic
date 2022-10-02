import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/getData';
import { ChangeEvent } from 'react';

export interface IMonster {
  id: string;
  email: string;
  name: string;
}

const App = () => {
  const [monsters, setMonsters] = useState<IMonster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchInput, setSearchInput] = useState('');

  console.log('RENDER*****');

  useEffect(() => {
    // console.log('USE EFFECT for FETCH ...');
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((res) => res.json())
    //   .then((users) => {
    //     console.log('UPDATE SET MONSTERS HAPPENED!');
    //     setMonsters(users);
    //   });

    const fetchingData = async () => {
      const users = await getData<IMonster[]>(
        'https://jsonplaceholder.typicode.com/users'
      );

      setMonsters(users);
    };

    fetchingData();
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

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
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

export default App;
