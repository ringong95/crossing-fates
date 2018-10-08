import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { renderSuggestion, renderInputComponent, getSuggestions, getSuggestionValue } from './../../lib/AutofillMethods'
class IntegrationAutosuggest extends React.Component {
    state = {
        characterOne: '',
        characterTwo: '',
        suggestions: [],
    };
    
    handleSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value),
        });
    };
    
    handleSuggestionsClearRequested = () => {
        this.setState({
            suggestions: [],
        });
    };
    
    handleChange = name => (event, { newValue }) => {
        this.setState({
            [name]: newValue,
        });
    };
    
    render() {
        const { classes } = this.props;
        
        const autosuggestProps = {
            renderInputComponent,
            suggestions: this.state.suggestions,
            onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
            onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
            getSuggestionValue,
            renderSuggestion,
        };
        
        return (
            <div className={classes.root}>
            <Autosuggest
            {...autosuggestProps}
            inputProps={{
                classes,
                label: 'Select your characters',
                placeholder: 'Character One',
                value: this.state.characterOne,
                onChange: this.handleChange('characterOne'),
                inputRef: node => {
                    this.popperNode = node;
                },
                InputLabelProps: {
                    shrink: true,
                },
            }}
            theme={{
                suggestionsList: classes.suggestionsList,
                suggestion: classes.suggestion,
            }}
            renderSuggestionsContainer={options => (
                <Popper anchorEl={this.popperNode} open={Boolean(options.children)}>
                <Paper
                square
                {...options.containerProps}
                style={{ width: this.popperNode ? this.popperNode.clientWidth : null }}
                >
                {options.children}
                </Paper>
                </Popper>
                )}
                />
                <div className={classes.divider} />
                <Autosuggest
                {...autosuggestProps}
                inputProps={{
                    classes,
                    placeholder: 'Character Two',
                    value: this.state.characterTwo,
                    onChange: this.handleChange('characterTwo'),
                    inputRef: node => {
                        this.popperNode = node;
                    },
                    InputLabelProps: {
                        shrink: true,
                    },
                }}
                theme={{
                    suggestionsList: classes.suggestionsList,
                    suggestion: classes.suggestion,
                }}
                renderSuggestionsContainer={options => (
                    <Popper anchorEl={this.popperNode} open={Boolean(options.children)}>
                    <Paper
                    square
                    {...options.containerProps}
                    style={{ width: this.popperNode ? this.popperNode.clientWidth : null }}
                    >
                    {options.children}
                    </Paper>
                    </Popper>
                    )}
                    />
                    </div>
                    );
                }
            }
            
            IntegrationAutosuggest.propTypes = {
                classes: PropTypes.object.isRequired,
            };

export default withStyles(styles)(IntegrationAutosuggest);
