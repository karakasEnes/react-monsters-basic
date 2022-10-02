import React from 'react';
import { IMonster } from '../../App';
import CardItem from '../card-item/card-item.component';
import './card-list.styles.css';

type CardListPropsType = {
  monsters: IMonster[];
};

const CardList = (props: CardListPropsType) => {
  return (
    <div className='card-list'>
      {props.monsters.map((monster) => {
        return <CardItem key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
