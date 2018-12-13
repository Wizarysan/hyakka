import * as React from 'react';
import Card from '../Card/Card';
import styled from 'styled-components';

interface CardsListProps {
    cards: Object[];
}

const CardsListWrapper = styled.div`
    padding: 30px 10px;
`

const CardsList: React.SFC<CardsListProps> = (props) => {
        return (
            <CardsListWrapper className="hyakka-card-list">
                <Card image="https://s.vndb.org/cv/76/26976.jpg"/>
            </CardsListWrapper>
        ) 
}

export default CardsList;


