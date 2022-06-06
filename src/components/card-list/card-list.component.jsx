import { Component } from 'react';
import CardItem from '../card-item/card-item.component';
import './card-list.styles.css';

class CardList extends Component {
  constructor() {
    super();
    console.log('constructor CLASS LIST');
  }
  render() {
    console.log('RENDER BY class list');
    const { monsters } = this.props;

    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          return <CardItem key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
