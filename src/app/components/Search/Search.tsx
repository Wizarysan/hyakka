import * as React from 'react';
import styled from 'styled-components';
import CardsList from '../CardsList/CardsList';
import SearchForm from '../SearchForm/SearchForm';

const SearchWrapper = styled.div`
    padding: 20px;
`

export default class Search extends React.Component {
    render() {
        return (
            <SearchWrapper className="hyakka-search">
                <SearchForm />
                <CardsList cards={[]} />
            </SearchWrapper>
        )        
    }
}