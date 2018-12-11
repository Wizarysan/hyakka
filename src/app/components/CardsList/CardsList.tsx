import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import Card from '../Card/Card';



export default class CardList extends React.Component {
    render() {
        return (
            <div className="hyakka-card-list">
                <Card image="https://kawai.shikimori.org/system/animes/original/37991.jpg"/>
            </div>
        )        
    }
}


