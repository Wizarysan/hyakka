import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';

interface CardProps {
    image: string;
    name: string;
    year: string;
    type: string;
    cardId: string;
}

const CardWrapper = styled.div`
    position: relative;    
    display: inline-block;
    vertical-align: top;
    width: 200px;
    min-height: 320px;
    margin: 0 10px 40px 10px;
    padding: 8px;
    background: white;
    transition: all .2s;
    &:hover {
        transform: translate(0, -2px);
        box-shadow: 3px 3px 10px 0px rgba(0,0,0,0.75);
        .hyakka-card-additional {
            opacity: 1;
        }
    }
`;
const CardCover = styled.img`
    max-width: 100%;
`;
const CardTitle = styled.p`
    font-size: 1.2em;
    margin: 5px 0;
    white-space: nowrap;
`;
const CardYear = styled.p`
    position: absolute;
    opacity: 0;
    top: 15px;
    left: 15px;
    margin:0;    
    padding: 0 7px; 
    background: #3692a4;   
    color: white;    
    font-size: 1.3em;
    transition: opacity .2s;
`;
const CardType = styled.p`
    position: absolute;
    opacity: 0;
    top: 15px;
    margin:0;
    right: 15px;
    padding: 0 7px; 
    background: #3692a4;  
    color: white;    
    font-size: 1.3em;
    transition: opacity .2s;
`;
const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
`

const Card: React.SFC<CardProps> = props => {
    const { image, name, year, type, cardId} = props;
    let ellipsis = name.length < 20 ? '' : '...';    
    return (
        <CardWrapper className="hyakka-card">
            <StyledLink to={`/fullcard/${cardId}`} >
                <CardCover src={image}/>
                <CardTitle>{name.substr(0, 20) + ellipsis}</CardTitle>
                <CardType className="hyakka-card-additional">{type}</CardType>
                <CardYear className="hyakka-card-additional">{year}</CardYear>
            </StyledLink>
        </CardWrapper>
    );
}

export default Card;
