import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedF: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <React.Fragment>
        <FormGroup flex>
            <FormControlLabel
                control={
                    <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
                }
                label="Постикать носочки"
            />
            <FormControlLabel
                control={
                    <Checkbox checked={state.checkedB} onChange={handleChange('checkedB')} value="checkedB" />
                }
                label="Купить хлебушку!"
            />
        </FormGroup>
    </React.Fragment>
  );
}