import { Component } from 'react';
import './card-item.styles.css';
const CardItem = (props) => {
  const { id, name, email } = props.monster;

  return (
    <div className='card-container'>
      <img
        src={`https://robohash.org/${id}/set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default CardItem;
