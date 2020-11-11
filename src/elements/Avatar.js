import React from 'react';
import { Avatar as BaseAvatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  avatar: {
    width: '40%',
    height: 'auto',
    left: '30%',
  },
}));

const Avatar = ({ src, alt }) => {
  const classes = useStyles();
  return (
    <BaseAvatar
      className={classes.avatar}
      variant="circle"
      src={src}
      alt={alt}
    />
  );
};

export default Avatar;
