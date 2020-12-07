import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from '@material-ui/core';
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
} from '@material-ui/icons';
import { red } from '@material-ui/core/colors';

import formatDate from 'utils/DateUtils';
import 'containers/productList/ProductBoard.css';

import soldout from 'assets/images/soldout.jpg';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 400,
    maxHeight: 600,
  },
  media: {
    height: 50,
    paddingTop: '56.25%', // 16:9
  },

  avatar: {
    backgroundColor: red[500],
  },
}));

const ProductList = (props) => {
  const classes = useStyles();
  const { product } = props;
  const [clicked, setClicked] = useState(false);

  const onClickFav = () => {
    if (clicked === true) setClicked(false);
    if (clicked === false) setClicked(true);
  };

  return (
    <div key={product.id} className="card">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              src={product.senderProfileUrl}
              aria-label={product.senderName}
              className={classes.avatar}
              alt={product.senderName}
            />
          }
          title={product.name}
          subheader={formatDate(product.createdDateTime)}
        />
        <Link to={`/detailpage/${product.id}`}>
          {product.isSold ? (
            // 판매 완료시
            <CardMedia
              className={classes.media}
              image={soldout}
              title={product.name}
            />
          ) : (
            // 아직 판매 중일 경우
            <CardMedia
              className={classes.media}
              image={product.profileUrl}
              title={product.name}
            />
          )}
        </Link>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.place === '' ? '미정' : product.place},{' '}
            {product.price <= 0 ? '무료나눔' : `${product.price}원`}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={onClickFav}>
            {clicked ? (
              <FavoriteIcon style={{ fill: 'red' }} />
            ) : (
              <FavoriteIcon />
            )}
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductList;
