import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

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

const TooltipsDialog = ({ toolTipsOpen, handleCloseTooltips }) => {
  const classes = useStyles();
  const [name, setName] = React.useState();
  const [price, setPrice] = React.useState();
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleOnChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const onClickRegisterButton = () => {
    alert('등록되었습니다');
    handleCloseTooltips();
  };

  return (
    <Dialog
      open={toolTipsOpen}
      maxWidth="md"
      fullWidth
      onClose={handleCloseTooltips}
      disableEscapeKeyDown="true"
      scroll="body"
    >
      <DialogTitle id="alert-dialog-slide-title" className={classes.title}>
        상품 등록하기
      </DialogTitle>
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
      <DialogActions>
        <Button onClick={handleCloseTooltips} color="primary">
          취소하기
        </Button>
        <Button onClick={onClickRegisterButton} color="primary">
          등록하기
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default TooltipsDialog;
