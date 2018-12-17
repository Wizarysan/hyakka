import * as React from 'react';
import styled from 'styled-components';
import Button from '../_Generic/Button/Button';

interface SearchFormProps {
    click: Function,
    searchHandler: Function
}

const SearchFormWrapper = styled.div`
    padding-left: 15px;
`
const SearchFormInput = styled.input`
    font-size: 1.1em;
    padding: 3px 10px;
    border-color: #46b8ce;
    border-style: solid;
    &:focus {
        outline:0;
    }
`

export default class SearchForm extends React.Component<SearchFormProps> {
    render() {
        return (
            <SearchFormWrapper className="hyakka-search-form">
                <form>
                    <SearchFormInput type="text" />
                    <Button click={
                        ()=> {
                                this.props.click('Test')
                                this.props.searchHandler('Test')
                            }
                        } primary>Search</Button>
                </form>                
            </SearchFormWrapper>
        )        
    }
}