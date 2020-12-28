import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));

const StateCard = ({ className, state, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              state
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {state.toLowerCase().replace(/_/g, ' ')}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              14
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

StateCard.propTypes = {
  className: PropTypes.string,
  state: PropTypes.string
};

export default StateCard;
