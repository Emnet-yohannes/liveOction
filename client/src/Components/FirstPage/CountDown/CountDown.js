import React from 'react';
import { Typography } from '@material-ui/core';
// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <Typography variant="h5">{hours}:{minutes}:{seconds}</Typography>;
  }
};
export default renderer