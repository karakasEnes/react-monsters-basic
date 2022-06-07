import CardItem from '../card-item/card-item.component';
import './card-list.styles.css';

const CardList = (props) => {
  return (
    <div className='card-list'>
      {props.monsters.map((monster) => {
        return <CardItem key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
