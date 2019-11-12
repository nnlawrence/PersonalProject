import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { connect } from 'react-redux';

const {useState, useEffect} = React;

function OpenStatus(props) {
  const [checked, setChecked] = useState(false);
  console.log(checked)

  useEffect(() => {
    function statusChange(status) {
      setChecked(status.checked);
    }})
  //   if (checked === null) {
  //     return 'Loading...';
  //   }
  //   return checked ? 'Open' : 'Closed';
  // }

  const toggleChecked = async () => {
    
    await setChecked(prev => !prev);
    axios.put(`/api/opentruck/${props.reduxState.id}`, {checked}).then(res => {
      // setChecked(res.data)
  })
  };

  console.log(checked)
  //create a put request to backend changing true or false of open

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={checked} onChange={() => toggleChecked()} />}
        // label="Available"
      />
    </FormGroup>
  );
}

const mapStateToProps = (reduxState) => {
  return {reduxState}
}

export default connect(mapStateToProps, {})(OpenStatus)