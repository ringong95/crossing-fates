import React, {Component} from 'react';
import { connect } from 'react-redux';

import matches from '../../lib/fakematches'
import CharacterAutoFill from '../../components/CharacterAutofill'
import PlayerNames from '../../components/PlayerNameField';
import { FetchMatches } from '../../actions/fetchActions'
import Popup from "reactjs-popup";
import { SearchContainer, SearchFields, ContainerLabel, HeaderContainer, Label } from './styles'

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
            showSearch: true,
        };
    }
    
    componentDidMount(){
        //load dummy matches here and insert to reducer
        this.props.loadMatches(matches)
    }


    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    
    toggleSearchFields = () =>{
        this.setState(prevState =>({
            showSearch: !prevState.showSearch 
        }))
    }

    render() {
        return (
            <HeaderContainer show={this.state.showSearch}>
            <ContainerLabel>
                <Label > 
                    Logo
                </Label>
            <Label onClick={this.toggleSearchFields}> 
                        Search Filter  
                        
                        {this.state.showSearch}
                </Label>
                <Popup 
                closeOnDocumentClick
                keepTooltipInside=".tooltipBoundary"
                trigger={<button> Trigger</button>} 
                position="left center">
                    <div>Popup content here !!</div>
                </Popup>
            </ContainerLabel>
            <SearchContainer show={this.state.showSearch}>
                    <SearchFields>
                        <CharacterAutoFill
                            player={1}
                            character={1}
                        />
                        <CharacterAutoFill
                            player={1}
                            character={2}
                        />
                        <PlayerNames 
                            value={this.state.p1Name}
                            onChange={this.handleChange('p1Name')}
                        />
                    </SearchFields>
                    <SearchFields>
                    <CharacterAutoFill
                            player={2}
                            character={1}
                        />
                        <CharacterAutoFill
                            player={2}
                            character={2}
                        />
                        <PlayerNames
                            value={this.state.p2Name}
                            onChange={this.handleChange('p2Name')}
                        />
                    </SearchFields>
                </SearchContainer>
            </HeaderContainer>
            
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