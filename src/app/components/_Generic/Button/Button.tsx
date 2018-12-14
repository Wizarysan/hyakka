import * as React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    children: string,
    primary?: boolean,
    click?: Function
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
    const {children, primary, click} = props;
    return (
        <StyledButton onClick={(e)=>{e.preventDefault(); click('button1')}} primary={primary} className="hyakka-button">
            {children}
        </StyledButton>
    );
}

export default Button;
