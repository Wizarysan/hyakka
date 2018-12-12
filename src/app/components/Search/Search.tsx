import * as React from 'react';
import CardsList from '../CardsList/CardsList';
import SearchForm from '../SearchForm/SearchForm';

export default class Search extends React.Component {
    render() {
        return (
            <div className="hyakka-search">
                <SearchForm />
                <CardsList cards={[]} />
            </div>
        )        
    }
}