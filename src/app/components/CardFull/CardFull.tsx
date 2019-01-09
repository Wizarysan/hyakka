import * as React from 'react';
import styled from 'styled-components';

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {State} from './../../types/State';
import {fullCardActions} from './CardFullDuck';
import getSingleEntry from '../../search/getSingleEntry';


interface FullCardProps {
    match: any,
    results: any, 
    actions: any,
    fullCard: any  
}

const FullWrapper = styled.div`
    padding: 0 30px;
    font-size: 1.2em;
`
const FullCover = styled.img`
    max-width: 40%;
    display: inline-block;
`
const FullData = styled.div`
    max-width: 59%;
    display: inline-block;    
    vertical-align: top;
    padding: 0 40px;
    & p {
        margin: 0 0 15px 0;
    }
`
const FullOngoing = styled.p`
   font-size: 1.3em;
`

class CardFull extends React.Component<FullCardProps> {
    state = {
        fullCardRequested: false
    }
    
    componentDidMount() {
        const ownId = parseInt(this.props.match.params.ownId)
        for(let category in this.props.results.body) {
            this.props.results.body[category].forEach((item: any)=> {
                if(item.ownId === ownId) {
                    console.log(this.props.actions.setFullCard(item))                    

                }
            })
        }                
    }

    componentDidUpdate(prevProps: any) {
        if(!this.state.fullCardRequested) {
            getSingleEntry(this.props.fullCard.id, this.props.fullCard.type).then(newItem => {
                this.setState({fullCardRequested: true})
                this.props.actions.setFullCard(newItem)                
            })
        }
    }
    
    render() {
        const {name, cover, type, format, synopsis, by, year, genres, ratings, tags, ongoing, url} = this.props.fullCard;
        return (
            <FullWrapper className="hyakka-card-full">
                <h1>{name}</h1>
                <FullCover src={cover} alt=""/>
                <FullData>
                    <FullOngoing className={ongoing ? 'text-teal' : 'text-green'}><b>{ongoing ? 'Ongoing' : 'Complete'}</b></FullOngoing>
                    <p><b>Type:</b> {type}</p>
                    <p><b>Format:</b> {format}</p>
                    <p><b>Year:</b> {year}</p>                    
                    <p><b>Native rating:</b> {ratings}</p>
                </FullData>
                <p>{synopsis}</p>
                <p><a href={url} target="_blank">More</a></p>
            </FullWrapper>
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