import * as React from 'react';
import Card from '../Card/Card';

interface CardsListProps {
    cards: Object[]
}

const CardsList: React.SFC<CardsListProps> = (props) => {
        return (
            <div className="hyakka-card-list">
                <Card image="https://kawai.shikimori.org/system/animes/original/37991.jpg"/>
            </div>
        ) 
}

export default CardsList;


