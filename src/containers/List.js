import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { Link } from 'react-router-dom';
import DetailPage from '../components/DetailPage';
import './Board.css';

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

const List = (props) => {
  const classes = useStyles();
  const { product } = props;
  return (
    <div key={product.id} className="card">
      <Link to={`/detailpage/${product.id}`} components={DetailPage}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar
                aria-label={product.senderName}
                className={classes.avatar}
                alt={product.senderName}
              />
            }
            title={product.name}
            subheader={product.createdDateTime}
          />

          <CardMedia
            className={classes.media}
            image={product.profileUrl}
            title={product.name}
          />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.price}원
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Link>
    </div>
  );
};

export default List;
