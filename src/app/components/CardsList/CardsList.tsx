import * as React from 'react';
import Card from '../Card/Card';
import styled from 'styled-components';
import { filterByString } from '../../helpers/helpers';

interface CardsListProps {
    results: {        
        loading: boolean,
        error: boolean,
        body: Array<any>
    },
    searchQuery: string,
    filters: {
        name: boolean
    }
}

const CardsListWrapper = styled.div`
    padding: 30px 10px;
`
const CardsList: React.SFC<CardsListProps> = props => {
        const {loading, error, body} = props.results;
        const filters = props.filters;
        const searchQuery = props.searchQuery;
        let output;
        if(loading) {
            output = <div>Loading...</div>
        } else if(error) {
            output = <div>Something went wrong. Try again!</div>
        } else {
            let categories = [];
            for (let category in body) {
                let cards = body[category];
                if(filters.name) {
                    cards = filterByString(body[category], 'name', searchQuery)
                }
                cards = cards.map((item: any, index: number) => {
                    return <Card 
                                key={`${item.id}_${index}`} 
                                image={item.cover}
                                name={item.name}
                                type={item.type}
                                year={item.year}
                                />
                })
                categories.push(<h3 key={`cat_${category}`} className="capitalize">{category}</h3>)
                categories.push(cards)
            }
            output = <div>{categories}</div>
        }      
        return (
            <CardsListWrapper className="hyakka-card-list">
                {output}                
            </CardsListWrapper>
        ) 
}

export default CardsList;


