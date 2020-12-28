import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import StateCard from './StateCard';
import CustomerListView from '../VehicleListView';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const states = [
  'REGISTERED',
  'AT_SERVICE',
  'READY',
  'DELIVERED'
];

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          {states.map((state) => {
            return (
              <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
              >
                <StateCard state={state} key={state} />
              </Grid>
            );
          })}
          <Grid
            item
            lg={12}
            md={12}
          >
            <CustomerListView />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
