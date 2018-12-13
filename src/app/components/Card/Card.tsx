import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';

interface CardProps {
    image: string;
}

const CardWrapper = styled.div`
    width: 200px;
    padding: 5px;
    transition: all .2s;
    &:hover {
        transform: translate(0, -2px);
        box-shadow: 3px 3px 10px 0px rgba(0,0,0,0.75);
    }
`;
const CardCover = styled.img`
    max-width: 100%;
`;
const CardTitle = styled.p`
    font-size: 1.2em;
    margin: 5px 0;
`;
const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
`

const Card: React.SFC<CardProps> = (props) => {
    return (
        <CardWrapper className="hyakka-card">
            <StyledLink to="/fullcard">
                <CardCover src={props.image} />
                <CardTitle>Test title</CardTitle>
            </StyledLink>
        </CardWrapper>
    );
}

export default Card;
