import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';

interface CardProps {
    image: string
}

const CardWrapper = styled.div`
    width: 200px;
`;
const CardCover = styled.img`
    max-width: 100%;
`;
const CardTitle = styled.p`
    font-size: 1.2em;
    margin: 5px 0;
`;

const Card: React.SFC<CardProps> = (props) => {
    return (
        <CardWrapper className="hyakka-card">
            <Link to="/fullcard">
                <CardCover src={props.image} />
                <CardTitle>Test title</CardTitle>
            </Link>
        </CardWrapper>
    );
}

export default Card;
