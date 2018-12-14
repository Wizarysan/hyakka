import * as React from 'react';
import styled from 'styled-components';
import CardsList from '../CardsList/CardsList';
import SearchForm from '../SearchForm/SearchForm';

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {State} from './../../types/State';
import {searchActions} from './SearchDuck';

const SearchWrapper = styled.div`
    padding: 20px;
`

class Search extends React.Component {
    render() {
        return (
            <SearchWrapper className="hyakka-search">
                <SearchForm />
                <CardsList cards={[]} />
            </SearchWrapper>
        )        
    }
}

function mapStateToProps(state: State) {
    return {
      search: state.search
    };
  }
  
  function mapDispatchToProps(dispatch: any) {
    return {
      actions: bindActionCreators<any, any>(searchActions, dispatch)
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(Search);