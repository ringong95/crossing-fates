import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 1,
          };
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div>
             <p> Search Filter  </p>
                <div>
                <SelectField
                    floatingLabelText="First Character"
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <MenuItem value={1} primaryText="Never" />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                    <MenuItem value={5} primaryText="Weekly" />
                </SelectField>
                <br />
                
                <SelectField
                    floatingLabelText="Second Character"
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <MenuItem value={1} primaryText="Never" />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                    <MenuItem value={5} primaryText="Weekly" />
                </SelectField>
                <br />
                <TextField
                floatingLabelText="Player"
                floatingLabelFixed={true}
                />
              </div>
            </div>
        )
        
    }
}
export default Header