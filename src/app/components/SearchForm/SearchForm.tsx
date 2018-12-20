import * as React from 'react';
import styled from 'styled-components';
import Button from '../_Generic/Button/Button';

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {State} from './../../types/State';
import {filterActions} from './FilterDuck';

interface SearchFormProps {
    click: (a: object, b: string)=>void,
    setSearch: (a: string)=>void,
    searchObject: object,
    filters: {
        name: boolean
    },
    actions: any
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

class SearchForm extends React.Component<SearchFormProps> {
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
                                this.props.setSearch(this.state.searchQuery)
                                this.props.click(this.props.searchObject, this.state.searchQuery)                                
                            }
                        } primary>Search</Button>                        
                </form> 
                <div className="hyakka-options">
                    <input type="checkbox" name="strict" onChange={
                        (e) => {
                            e.target.checked ? this.props.actions.filterNameOn() : this.props.actions.filterNameOff()
                        }
                    }/>
                    <label htmlFor="strict">Strict search</label>
                </div>               
            </SearchFormWrapper>
        )        
    }
}

function mapStateToProps(state: State) {
    return {
      filters: state.filters
    };
  }
  
  function mapDispatchToProps(dispatch: any) {
    return {
      actions: bindActionCreators<any, any>(filterActions, dispatch)
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);