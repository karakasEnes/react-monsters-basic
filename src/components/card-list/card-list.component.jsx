import { Component } from 'react';

class CardList extends Component {
  constructor() {
    super();
    console.log('constructor CLASS LIST');
  }
  render() {
    console.log('RENDER BY class list');
    const { monsters } = this.props;

    return (
      <div>
        {monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
