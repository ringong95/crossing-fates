import React, {Component} from 'react';

import CharacterAutoFill from '../../components/CharacterAutofill'
import PlayerNames from '../../components/PlayerNameField';
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
                    <CharacterAutoFill/>
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
    export default Header