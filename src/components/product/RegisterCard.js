import React from 'react';

import { TextField, Card, makeStyles } from '@material-ui/core';

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
    width: '60%',
    marginLeft: '20%',
    marginBottom: '4%',
  },
  title: {
    textAlign: 'center',
  },
}));

const RegisterCard = ({
  name,
  price,
  handleChange,
  handleOnChangePrice,
  content,
  handleOnChangeContent,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <form className={classes.form} noValidate autoComplete="off">
          <img
            className={classes.img}
            src="https://byline.network/wp-content/uploads/2017/07/mac_1.jpg"
            alt="상품"
          />
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
