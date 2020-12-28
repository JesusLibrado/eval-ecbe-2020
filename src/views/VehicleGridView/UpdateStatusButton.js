import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Grid, Select,
  InputLabel,
  MenuItem,
  Box
} from '@material-ui/core';

const options = [
  'REGISTERED',
  'AT_SERVICE',
  'READY',
  'DELIVERED'
];

const UpdateStatusButton = ({ vehicle }) => {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = useState(vehicle.status);

  //   useEffect(() => {
  //     setStatus(vehicle.status);
  //   }, [vehicle]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const update = async (event) => {
    event.preventDefault();
    const res = await axios.put(`http://localhost:4000/vehicle/${vehicle.carId}?status=${status}`);
    if (res.data) {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        change status
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Change current status of a vehicle</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ID:
            {' '}
            {vehicle.carId}
          </DialogContentText>
          <Grid
            container
            spacing={3}
          >
            <Box
              p={6}
            >
              <InputLabel id="dropdown">Status</InputLabel>
              <Select
                labelId="dropwdown"
                value={status}
                onChange={handleChange}
                autoWidth
              >
                {
                    options.map((option) => <MenuItem value={option} key={option}>{option.toLowerCase().replace(/[_]/g, ' ')}</MenuItem>)
                }
              </Select>
            </Box>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={update} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

UpdateStatusButton.propTypes = {
  vehicle: PropTypes.object.isRequired
};

export default UpdateStatusButton;
