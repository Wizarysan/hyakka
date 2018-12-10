import * as React from 'react';
import styled from 'styled-components';

interface IProps {
   compiler: string,
   framework: string,
   bundler: string
}

const TestH1 = styled.h1`
    text-align: center;
    color: grey;
` 

class Test extends React.Component<IProps, {}> {
   render() {
    return <TestH1>This is a {this.props.framework} application using    {this.props.compiler} with {this.props.bundler}</TestH1>
   }
}

export default Test;