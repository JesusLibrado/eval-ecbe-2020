import React, { useState, useEffect } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import axios from 'axios';
import Page from 'src/components/Page';
// import apiUrl from '../../../utils/getUrl';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const [customers] = useState(data);
  const [vehicles, setVehicles] = useState([]);

  async function fetch() {
    const res = await axios.get('http://localhost:4000/vehicles');
    setVehicles(res.data);
  }

  useEffect(() => {
    fetch();
  });

  return (
    <Page className={classes.root} title="Customers">
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results customers={customers} vehicles={vehicles} />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
