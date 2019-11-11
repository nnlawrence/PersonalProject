import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

export default function SwitchesSize() {
  const [checked, setChecked] = React.useState(false);
  // const []

  const toggleChecked = () => {
    setChecked(prev => !prev);
  };

  const availability = (truck_id) => {
    let openClose = {
      // available: this.state.available
    }

    axios.put(`/api/available/${truck_id}`, openClose).then(res => {
        // this.handleToggle(res.data)
  })
}

  //create a put request to backend changing true or false of open

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={checked} onChange={toggleChecked} />}
        // label="Available"
      />
    </FormGroup>
  );
}