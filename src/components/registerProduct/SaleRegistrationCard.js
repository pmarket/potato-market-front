import React from 'react';
import { TextField, Card, makeStyles, Button } from '@material-ui/core';

import TransitionsModal from 'components/registerProduct/Placemodal';
import Place from 'components/registerProduct/Place';

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
    marginLeft: '45%',
    marginBottom: '5%',
  },
  modal: {
    marginTop: '20px',
  },
}));

const SaleRegistrationCard = ({
  place,
  handleOnClickPlace,
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
            <Button variant="outlined" color="primary" component="span">
              Upload
            </Button>
          </label>
        </div>

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
        <Place place={place} handleOnClickPlace={handleOnClickPlace} />

        <div className={classes.modal}>
          <TransitionsModal />
        </div>
      </form>
    </Card>
  );
};

export default SaleRegistrationCard;
