import React, {Component} from 'react';
import { connect } from 'react-redux';

import matches from '../../lib/fakematches'
import CharacterAutoFill from '../../components/CharacterAutofill'
import PlayerNames from '../../components/PlayerNameField';
import { FetchMatches } from '../../actions/fetchActions'
import { SearchContainer, SearchFields, ContainerLabel } from './styles'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            p1characterOne: 1,
            p1characterTwo: 2,
            p1Name: '',
            p2characterOne: 1,
            p2characterTwo: 2,
            p2Name: '',
        };
    }
    
    componentDidMount(){
        //load dummy matches here and insert to reducer
        console.log(matches)
        this.props.loadMatches(matches)
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    
    render() {
        return (
            <SearchContainer>
                <ContainerLabel> 
                    Search Filter  
                </ContainerLabel>
                <SearchFields>
                    <CharacterAutoFill
                        player={1}
                        characterNumber={1}
                    />
                    <PlayerNames 
                        value={this.state.p1Name}
                        onChange={this.handleChange('p1Name')}
                    />
                </SearchFields>
                <SearchFields>
                    <CharacterAutoFill/>
                    <PlayerNames
                        value={this.state.p2Name}
                        onChange={this.handleChange('p2Name')}
                    />
                </SearchFields>
            </SearchContainer>
            )
            
        }
    }
    const mapStateToProps = (state) => {
        return {
            matches: state.matches,
        };
    }
    const mapDispatchToProps = dispatch => ({
        loadMatches: matches => dispatch(FetchMatches(matches))
    })
    export default connect(mapStateToProps, mapDispatchToProps)(Header)