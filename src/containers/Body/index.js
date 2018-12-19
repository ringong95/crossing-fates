import React, {Component} from 'react';
import { connect } from 'react-redux';
import MatchCard from '../../components/MatchCard';
import nameToAbbrev from '../../lib/NameToAbbreviations';

class Body extends Component {
    constructor(props){
        super(props)
        
    }
    filterMatches (){
        const { matches, search }= this.props 
        return matches.filter( match => {
            const tagArray = [ match.p1.charOne, match.p1.charTwo, match.p2.charOne, match.p2.charTwo]
            const searchArray = []
            Object.values(search).forEach( e => searchArray.push( nameToAbbrev(e)) )
            const filtered = tagArray.filter( tag => searchArray.includes(tag))
            if(filtered.length > 0) return true
        })
    }
    render() {
        const searchQueries =  Object.values(this.props.search)
        let matches;

        if (searchQueries.filter( query => query.length > 0 ) == false){
            matches = this.props.matches.map( match => <MatchCard  MatchInfo={match} key={match.p1} />)
        } else {
            matches = this.filterMatches().map( match => <MatchCard  MatchInfo={match} key={match.p1} />)
        }
        console.log(matches)
        return (
            <div>
            {matches}

            </div>
            )  
        }
    }
    
    const mapStateToProps = (state) => {
        return {
            matches: state.matches,
            search: state.search
        };
    }
    export default connect(mapStateToProps)(Body);
    