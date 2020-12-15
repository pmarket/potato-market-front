import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  FormControlLabel,
  RadioGroup,
  Radio,
  Paper,
  FormLabel,
} from '@material-ui/core';

import 'components/registerProduct/Place.css';

const places = [
  '본관',
  '대학원관',
  '학생회관',
  '이공관',
  '비전관',
  '다자인관',
  '음악관',
  '로뎀관',
  '영상비전센터',
  '신학관',
];

const useStyles = makeStyles(() => ({
  root: {
    width: '60%',
    marginLeft: '20%',
  },
}));

const Place = ({ handleOnClickPlace }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.root}>
      <Paper>
        <FormLabel>장소 선택</FormLabel>
        <RadioGroup
          aria-label="place"
          name="place"
          onChange={handleOnClickPlace}
        >
          <Grid container item xs={12} spacing={1}>
            {places.map((value) => (
              <Grid item xs={4} key={value}>
                <FormControlLabel
                  value={value}
                  control={<Radio color="primary" />}
                  label={value}
                />
              </Grid>
            ))}
          </Grid>
        </RadioGroup>
      </Paper>
    </Grid>
  );
};

export default Place;
