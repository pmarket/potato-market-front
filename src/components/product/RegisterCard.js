import React from 'react';
import Place from './Place';
import { TextField, Card, makeStyles, IconButton } from '@material-ui/core';
import TransitionsModal from './Placemodal';
import { PhotoCamera } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
      marginTop: '1%',
      marginLeft: '20%',
      marginBottom: '2%',
      width: '60%',
      height: '20%',
    },
  },
  form: {
    paddingTop: '1%',
    paddingBottom: '3%',
  },
  img: {
    marginLeft: '20%',
    marginRight: '20%',
    marginBottom: '4%',
    width: '60%',
    maxHeight: '500px',
    height: 'auto',
  },
  title: {
    textAlign: 'center',
  },
  input: {
    display: 'none',
  },
  fileForm: {
    marginLeft: '48%',
  },
}));

const RegisterCard = ({
  name,
  price,
  handleChange,
  handleOnChangePrice,
  content,
  handleOnChangeContent,
  profileUrl,
  fileOnChange,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <form className={classes.form} noValidate autoComplete="off">
          <img className={classes.img} src={profileUrl} alt="상품" />
          <div className={classes.fileForm}>
            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
              onChange={fileOnChange}
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload profileUrl"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </div>
          <TransitionsModal />
          <Place />
          <TextField
            id="outlined-name"
            label="Title"
            value={name}
            onChange={handleChange}
            variant="outlined"
            margin="dense"
            placeholder="제목을 입력해주세요"
            size="small"
            required
            autoFocus
          />
          <TextField
            id="outlined-uncontrolled"
            label="Price"
            variant="outlined"
            margin="dense"
            value={price}
            onChange={handleOnChangePrice}
            placeholder="가격을 입력해주세요"
            size="small"
            type="number"
            required
          />
          <TextField
            id="standard-multiline-static"
            label="Content"
            variant="outlined"
            margin="dense"
            multiline
            rows={5}
            placeholder="상세 내용을 입력해주세요."
            size="small"
            value={content}
            onChange={handleOnChangeContent}
          />
        </form>
      </Card>
    </div>
  );
};

export default RegisterCard;
