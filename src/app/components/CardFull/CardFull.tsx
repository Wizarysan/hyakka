import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

interface FullCardProps {
    match: any;
}

export default class CardFull extends React.Component<FullCardProps> {
    render() {
        console.log(this.props.match)
        return (
            <div className="hyakka-card-full">
                Full Card {this.props.match.params.ownId}
            </div>
        )        
    }
}
