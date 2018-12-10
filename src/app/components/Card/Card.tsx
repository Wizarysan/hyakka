import React from 'react';
import styled from 'styled-components';

interface CardProps {
    image: string
}

const CardWrapper = styled.div`
    width: 200px;
`

const Card: React.SFC<CardProps> = (props) => {
    return (
        <CardWrapper className="hyakka-card">
            <img src={props.image} />
        </CardWrapper>
    );
}

export default Card;
