import * as React from 'react';
import CardsList from '../CardsList/CardsList';

export default class Search extends React.Component {
    render() {
        return (
            <div className="hyakka-search">
                <CardsList cards={[]} />
            </div>
        )        
    }
}