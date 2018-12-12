import * as React from 'react';
import styled from 'styled-components';

const SearchFormWrapper = styled.div`
    padding-left: 15px;
`
const SearchFormInput = styled.input`
    font-size: 1.1em;
`

export default class SearchForm extends React.Component {
    render() {
        return (
            <SearchFormWrapper className="hyakka-search-form">
                <form>
                    <SearchFormInput type="text" />
                    <button>Search</button>
                </form>                
            </SearchFormWrapper>
        )        
    }
}