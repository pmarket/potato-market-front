import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { IconButton } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ShowAvatarModal({ product }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <AvatarGroup max={4}>
          {product.commenters.map((comment) => (
            <Avatar alt="" src={comment} />
          ))}

          <Avatar />
        </AvatarGroup>{' '}
      </IconButton>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h1>댓글 쓴 사람들 목록</h1>
            {product.commenters.map((comment) => (
              <li
                style={{ float: 'left', listStyle: 'none', marginLeft: '7px' }}
              >
                <Avatar alt="" src={comment} />
              </li>
            ))}
          </div>
        </Fade>
      </Modal>
    </>
  );
}
