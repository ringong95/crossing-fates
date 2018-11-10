import React, {Component} from 'react';
import MatchCard from '../../components/MatchCard'
import FakeMatches from '../../lib/fakematches'

class Body extends Component {
    constructor(props){
        super(props)
        this.state = {
        };
    }
    
 

    render() {
        return (
            FakeMatches.map( match => <MatchCard  MatchInfo={match} key={match.p1} /> )
        )
        
    }
}
export default Body
