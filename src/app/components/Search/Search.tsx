//https://spin.atomicobject.com/2017/04/20/typesafe-container-components/
import * as React from 'react';
import styled from 'styled-components';
import CardsList from '../CardsList/CardsList';
import SearchForm from '../SearchForm/SearchForm';
import GlobalSearch from '../../search/globalSearch';

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {State} from './../../types/State';
import {searchActions} from './SearchDuck';

interface SearchProps {
    search: string,
    results: {        
        loading: boolean,
        error: boolean,
        body: Array<any>
    },
    filters: {
        name: boolean
    }
    actions: any
}

const SearchWrapper = styled.div`
    padding: 20px;
`

class Search extends React.Component<SearchProps> {
    state = {
        globalSearch: new GlobalSearch()
    }

    render() {
        return (
            <SearchWrapper className="hyakka-search">
                <SearchForm click={this.props.actions.startSearch} setSearch={this.props.actions.setSearch} searchObject={this.state.globalSearch} />                
            <CardsList results={this.props.results} filters={this.props.filters} searchQuery={this.props.search}/>
            </SearchWrapper>
        )        
    }
}

function mapStateToProps(state: State) {
    return {
      search: state.search,
      results: state.results,
      filters: state.filters
    };
  }
  
  function mapDispatchToProps(dispatch: any) {
    return {
      actions: bindActionCreators<any, any>(searchActions, dispatch)
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(Search);