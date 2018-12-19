import * as React from 'react';
import styled from 'styled-components';
import Button from '../_Generic/Button/Button';

interface SearchFormProps {
    click: Function,
    searchObject: any
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
    state = {
        searchQuery: ''
    }

    handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({searchQuery: e.currentTarget.value})
    }

    render() {
        return (
            <SearchFormWrapper className="hyakka-search-form">
                <form>
                    <SearchFormInput type="text" value={this.state.searchQuery} onChange={this.handleInput} />
                    <Button click={
                        ()=> {
                                this.props.click(this.props.searchObject, this.state.searchQuery)
                                //this.props.searchObject.test('Test')
                            }
                        } primary>Search</Button>                        
                </form> 
                <div className="hyakka-options">
                    <input type="checkbox" name="strict"/>
                    <label htmlFor="strict">Strict search</label>
                </div>               
            </SearchFormWrapper>
        )        
    }
}