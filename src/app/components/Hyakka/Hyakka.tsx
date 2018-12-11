import * as React from 'react';
import Card from '../Card/Card';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
                <Router>
                    <Card image="https://kawai.shikimori.org/system/animes/original/37991.jpg"/>                    
                </Router>
                <GlobalStyle />
            </div>
        )        
    }
}


