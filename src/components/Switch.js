import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { connect } from 'react-redux';

const {useState, useEffect} = React;

function SwitchesSize(props) {
  const [checked, setChecked] = useState(false);
  console.log(checked)

  useEffect(() => {
    setTimeout(() => {
      setChecked([{id: 0, content: 'foo'}])
    })
  })

  const toggleChecked = async (checked) => {
    console.log(checked)
    await setChecked(prev => !prev);
    console.log(checked)
    axios.put(`/api/opentruck/${props.reduxState.id}`, checked).then(res => {
      checked(res.data)
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

export default connect(mapStateToProps, {})(SwitchesSize)