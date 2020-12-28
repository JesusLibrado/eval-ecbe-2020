import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Grid from '@material-ui/core/Grid';

export default function RegisterNewButton() {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = useState('');
  const [data, setData] = useState({
    carId: '',
    kilometres: 0,
    brand: '',
    model: '',
    image: '',
    description: ''
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const send = async (event) => {
    event.preventDefault();
    const res = await axios.post('http://localhost:4000/vehicle', data);
    if (res.data) {
      setOpen(false);
    } else {
      setText('There has been an error. Please verify each field an try again');
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        REGISTER NEW VEHICLE
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Register a new vehicle</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="For internal use. It can not be repeated."
                label="Car ID"
                name="carId"
                onChange={handleChange}
                required
                value={data.carId}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Kilometres"
                name="kilometres"
                onChange={handleChange}
                required
                value={data.kilometres}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Brand"
                name="brand"
                onChange={handleChange}
                required
                value={data.brand}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Model"
                name="model"
                onChange={handleChange}
                required
                value={data.model}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Description"
                name="description"
                onChange={handleChange}
                required
                value={data.description}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Image URL"
                name="image"
                onChange={handleChange}
                value={data.image}
                variant="outlined"
              />
            </Grid>

          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={send} color="primary">
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
