import React, {Component} from 'react';
import SearchFilter from '../../components/SearchFilter'
import CharacterAutofill from '../../components/CharacterAutofill'
class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            characterOne: 1,
            characterTwo: 2,
          };
    }

    handleChangeOne = (event, index, value) => this.setState({...this.state, characterOne:value});
    handleChangeTwo = (event, index, value) => this.setState({...this.state, characterTwo:value});


    render() {
        return (
            <div>
             <p> Search Filter  </p>
            <CharacterAutofill/>
            </div>
        )
        
    }
}
export default Header