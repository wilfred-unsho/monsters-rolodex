import {Card} from '../../components/card/card.component';
import './card-list.styles.css';

export const CardList = (props) => {
    return <div className='card-list'>
        {
            props.monsters.map((monster)=> <Card key={monster.id} monster={monster}/>)
        }
    </div>;
}