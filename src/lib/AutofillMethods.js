import React from 'react';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import deburr from 'lodash/deburr';

import suggestions from './characterlist';

export function renderSuggestion(suggestion, { query, isHighlighted }) {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);
    
    return (
        <MenuItem selected={isHighlighted} component="div">
        <div>
        {parts.map((part, index) => {
            return part.highlight ? (
                <span key={String(index)} style={{ fontWeight: 500 }}>
                {part.text}
                </span>
                ) : (
                    <strong key={String(index)} style={{ fontWeight: 300 }}>
                    {part.text}
                    </strong>
                    );
                })}
                </div>
        </MenuItem>
    );
}

export function renderInputComponent(inputProps) {
    const { classes, inputRef = () => {}, ref, ...other } = inputProps;
        return (
            <TextField
            fullWidth
            InputProps={{
                inputRef: node => {
                    ref(node);
                    inputRef(node);
                },
                classes: {
                    input: classes.input,
                },
            }}
            {...other}
            />
    );
}

export function getSuggestions(value) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;
    
    return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
        count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;
        
        if (keep) {
            count += 1;
        }
        
        return keep;
    });
}

export function getSuggestionValue(suggestion) {
    return suggestion.label;
}
