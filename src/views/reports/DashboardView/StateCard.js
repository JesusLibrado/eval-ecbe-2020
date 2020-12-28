import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';
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
  const [total, setTotal] = useState(0);
  const [bgColor, setBgColor] = useState(colors.red[600]);

  const getTotal = async () => {
    const res = await axios.get(`http://localhost:4000/vehicle/total?status=${state}`);
    setTotal(res.data.total);
  };

  const setStateColor = () => {
    switch (state) {
      case 'REGISTERED':
        setBgColor(colors.blue[600]);
        break;
      case 'AT_SERVICE':
        setBgColor(colors.red[600]);
        break;
      case 'READY':
        setBgColor(colors.green[600]);
        break;
      case 'DELIVERED':
        setBgColor(colors.grey[600]);
        break;
      default:
        setBgColor(colors.grey[100]);
        break;
    }
  };

  useEffect(() => {
    setStateColor();
    getTotal();
  }, [state]);

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
            <Avatar className={classes.avatar} style={{ backgroundColor: bgColor }}>
              {total}
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
