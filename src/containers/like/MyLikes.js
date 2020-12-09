import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ProductApi from 'apis/ProductApi';
import MyLikesList from './MyLikesList';
import { ListSubheader } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '25%',
    marginTop: '10%',
    width: '50%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
export default function InteractiveList() {
  const classes = useStyles();
  const [myLikes, setMyLikes] = useState([]);
  const history = useHistory();
  useEffect(() => {
    ProductApi.MyLikesProducts().then((response) => {
      setMyLikes(response.data.data);
    });
  }, []);

  const onDetailButtonOnClick = (productId) => {
    history.push(`/board/detail/${productId}`);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          좋아요♥ 목록
        </ListSubheader>
      }
    >
      <MyLikesList
        myLikes={myLikes}
        onDetailButtonOnClick={onDetailButtonOnClick}
      />
    </List>
  );
}
