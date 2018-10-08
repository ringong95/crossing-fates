import React from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles'

const PlayerName = ({value, onChange, classes})=>(
    <TextField
    className={classes.field}
    id="standard-name"
    label="Player Name"
    value={value}
    onChange={onChange}
/>
)

export default withStyles(styles)(PlayerName);
