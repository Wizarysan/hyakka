import * as React from 'react';
import Card from '../Card/Card';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:regular,bold,italic&subset=latin,latin-ext');
    body {
        font-family: 'Source Sans Pro', sans-serif;
    }
`

export default class Hyakka extends React.Component {
    render() {
        return (
            <div className="hyakka">
                <Card image="https://kawai.shikimori.org/system/animes/original/37991.jpg"/>
                <GlobalStyle />
            </div>
        )        
    }
}


