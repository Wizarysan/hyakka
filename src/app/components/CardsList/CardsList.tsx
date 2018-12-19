import * as React from 'react';
import Card from '../Card/Card';
import styled from 'styled-components';

interface CardsListProps {
    results: {        
        loading: boolean,
        error: boolean,
        body: Array<any>
    };
}

const CardsListWrapper = styled.div`
    padding: 30px 10px;
`

const CardsList: React.SFC<CardsListProps> = props => {
        const {loading, error, body} = props.results;
        let output;
        if(loading) {
            output = <div>Loading</div>
        } else if(error) {
            output = <div>Something gone wrong during search</div>
        } else {
            let categories = [];
            for (let category in body) {
                let cards = body[category].map((item: any, index: number) => {
                    return <Card 
                                key={`${item.id}_${index}`} 
                                image={item.cover}
                                name={item.name}
                                type={item.type}
                                year={item.year}
                                />
                })
                categories.push(<h3 className="capitalize">{category}</h3>)
                categories.push(cards)
            }
            output = <div>{categories}</div>
        }      
        return (
            <CardsListWrapper className="hyakka-card-list">
                {output}
                <Card image="https://cdn.myanimelist.net/images/anime/10/17709.jpg?s=ff7ce7f225142feb457786d8374d2c79"
                name="Test name test name test name"
                type="anime"
                year="2007" />
            </CardsListWrapper>
        ) 
}

export default CardsList;


