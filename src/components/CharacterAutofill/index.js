import Autosuggest from 'react-autosuggest';
import React from 'react';
import { connect } from 'react-redux';
import CharacterList from '../../lib/characterlist'
import { SearchText } from '../../actions/searchActions'
import theme from './styles.js'

// Imagine you have a list of languages that you'd like to autosuggest.
const characters = CharacterList


// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    
    return inputLength === 0 ? [] : characters.filter(char =>
        char.label.toLowerCase().slice(0, inputLength) === inputValue
        );
    };
    
    // When suggestion is clicked, Autosuggest needs to populate the input
    // based on the clicked suggestion. Teach Autosuggest how to calculate the
    // input value for every given suggestion.
    const getSuggestionValue = suggestion => suggestion.label;
    
    // Use your imagination to render suggestions.
    const renderSuggestion = suggestion => (
        <div>
        {suggestion.label}
        </div>
        );
        
        class CharacterAutoFill extends React.Component {
            constructor(props) {
                super(props);
                // Autosuggest is a controlled component.
                // This means that you need to provide an input value
                // and an onChange handler that updates this value (see below).
                // Suggestions also need to be provided to the Autosuggest,
                // and they are initially empty because the Autosuggest is closed.
                this.state = {
                    value: '',
                    suggestions: [],
                    timeout:null
                };
            }
            
            onChange = (event, { newValue }) => {
                clearTimeout(this.state.timeout)
                this.setState({
                    value: newValue
                });

                this.setState({
                    timeout: setTimeout( ()=> {
                        this.props.onTextChange({
                            player: this.props.player,
                            character: this.props.character,
                            text: newValue
                        })
                    }, 300)
                })
            
            };
            
            // Autosuggest will call this function every time you need to update suggestions.
            // You already implemented this logic above, so just use it.
            onSuggestionsFetchRequested = ({ value }) => {
                this.setState({
                    suggestions: getSuggestions(value)
                });
            };
            
            // Autosuggest will call this function every time you need to clear suggestions.
            onSuggestionsClearRequested = () => {
                this.setState({
                    suggestions: []
                });
            };
            
            render() {
                const { value, suggestions } = this.state;
                
                // Autosuggest will pass through all these props to the input.
                const inputProps = {
                    placeholder: 'Type a character name',
                    value,
                    onChange: this.onChange
                };
                
                // Finally, render it!
                return (
                    <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                    theme={theme}
                    />
                    );
                }
            }
            const mapStateToProps = state => {
                return {
                    
                }
            }
            const mapDispatchToProps = dispatch =>({
                onTextChange: text =>  dispatch(SearchText({text})),
            })
            
            export default connect(mapStateToProps, mapDispatchToProps)(CharacterAutoFill);