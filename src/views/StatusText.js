import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  colors
} from '@material-ui/core';

const StatusText = ({ status }) => {
  const [color, setColor] = useState(colors.red[600]);

  const setStatusColor = () => {
    switch (status) {
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
  }, [status]);
  return (
    <>
      <Typography
        color="primary"
        display="inline"
        variant="body2"
      >
        <span style={{ color }}>
          {status.toLowerCase().replace(/[_]/g, ' ')}
        </span>
      </Typography>
    </>
  );
};

StatusText.propTypes = {
  status: PropTypes.string
};

export default StatusText;
