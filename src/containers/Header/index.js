import React, {Component} from 'react';
import CharacterAutofill from '../../components/CharacterAutofill'
import { SearchContainer, SearchFields, ContainerLabel } from './styles'


class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            characterOne: 1,
            characterTwo: 2,
        };
    }
    
    
    render() {
        return (
            <SearchContainer>
                <ContainerLabel> 
                    Search Filter  
                </ContainerLabel>
                <SearchFields>
                    <CharacterAutofill/>   
                </SearchFields>
                <SearchFields>
                    <CharacterAutofill/>
                </SearchFields>
            </SearchContainer>
            )
            
        }
    }
    export default Header