import React, {Component} from 'react';
import { connect } from 'react-redux';
import MatchCard from '../../components/MatchCard'

class Body extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            this.props.matches.map( match => <MatchCard  MatchInfo={match} key={match.p1} /> )
        )  
    }
}

    const mapStateToProps = (state) => {
        return {
            matches: state.matches,
        };
    }
export default connect(mapStateToProps)(Body);
