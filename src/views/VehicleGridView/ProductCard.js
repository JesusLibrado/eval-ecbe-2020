import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import StatusText from '../StatusText';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  }
}));

const ProductCard = ({ className, vehicle, ...rest }) => {
  const classes = useStyles();

  const [color, setColor] = useState(colors.red[600]);

  const setStatusColor = () => {
    switch (vehicle.status) {
      case 'REGISTERED':
        setColor(colors.blue[600]);
        break;
      case 'AT_SERVICE':
        setColor(colors.red[600]);
        break;
      case 'READY':
        setColor(colors.green[600]);
        break;
      case 'DELIVERED':
        setColor(colors.grey[600]);
        break;
      default:
        setColor(colors.grey[100]);
        break;
    }
  };
  useEffect(() => {
    setStatusColor();
  }, [vehicle]);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="center"
          mb={3}
        >
          <Avatar
            style={{ width: '200px', height: '200px', border: `2px solid ${color}` }}
            alt="Product"
            src={vehicle.image}
          />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {`${vehicle.brand}, ${vehicle.model}`}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {vehicle.description}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid
          container
          justify="space-between"
          spacing={2}
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              {vehicle.carId}
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <StatusText status={vehicle.status} />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  vehicle: PropTypes.object.isRequired
};

export default ProductCard;
