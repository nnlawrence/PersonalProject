import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import { withStyles } from '@material-ui/core/styles';

export default function SwitchesSize() {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked(prev => !prev);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={checked} onChange={toggleChecked} />}
        // label="Available"
      />
    </FormGroup>
  );
}