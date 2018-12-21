import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {State} from './../../types/State';
import {fullCardActions} from './CardFullDuck';

interface FullCardProps {
    match: any,
    results: any, 
    actions: any,
    fullCard: any  
}

class CardFull extends React.Component<FullCardProps> {
    componentDidMount() {
        const ownId = parseInt(this.props.match.params.ownId)
        for(let category in this.props.results.body) {
            this.props.results.body[category].forEach((item: any)=> {
                if(item.ownId === ownId) {
                    this.props.actions.setFullCard(item)
                }
            })
        }
    }
    
    render() {
        const full = this.props.fullCard;
        return (
            <div className="hyakka-card-full">
                <h1>{full.name}</h1>
                <img src={full.cover} alt=""/>
            </div>
        )        
    }
}

function mapStateToProps(state: State) {
    return {
      results: state.results,
      fullCard: state.currentCard
    };
  }
  
  function mapDispatchToProps(dispatch: any) {
    return {
      actions: bindActionCreators<any, any>(fullCardActions, dispatch)
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(CardFull);