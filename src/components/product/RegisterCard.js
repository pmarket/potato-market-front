import React from 'react';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

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

const RegisterCard = () => {
  const classes = useStyles();
  const [name, setName] = React.useState();
  const [price, setPrice] = React.useState();
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleOnChangePrice = (event) => {
    setPrice(event.target.value);
  };

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
            required="true"
            autoFocus="true"
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
            required="true"
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
          />
        </form>
      </Card>
    </div>
  );
};

export default RegisterCard;
