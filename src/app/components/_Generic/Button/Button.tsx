import * as React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    children: string;
    primary?: boolean;
}

const StyledButton = styled.button`
    background: ${(props: ButtonProps) => props.primary ? "#46b8ce" : "white"};
    color: ${(props: ButtonProps) => props.primary ? "white" : "#46b8ce"};
    border: 0;
    font-size: 1.1em;
    padding: 5px 20px;
    cursor: pointer;
`;

const Button: React.SFC<ButtonProps> = (props) => {
    return (
        <StyledButton primary={props.primary} className="hyakka-button">
            {props.children}
        </StyledButton>
    );
}

export default Button;
