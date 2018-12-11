import * as React from 'react';
import CardsList from '../CardsList/CardsList';
import CardFull from '../CardFull/CardFull';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:regular,bold,italic&subset=latin,latin-ext');
    body {
        font-family: 'Source Sans Pro', sans-serif;
    }
`

//TODO instead of CardList first route 
//must output search component that will have all search fields and CardList as output

export default class Hyakka extends React.Component {
    render() {
        return (
            <div className="hyakka">
                <Router>
                    <React.Fragment>
                        <Route path="/" exact component={CardsList} />
                        <Route path="/fullcard/" component={CardFull} />   
                    </React.Fragment>                  
                </Router>
                <GlobalStyle />
            </div>
        )        
    }
}


