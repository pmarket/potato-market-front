import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import AuthApi from 'apis/AuthApi';

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateError = validate(values);
    setErrors(validateError);
    if (Object.keys(validateError).length !== 0) {
      e.preventDefault();
      return;
    }
    try {
      await AuthApi.localSignUp(values.email, values.username, values.password);
      history.push('/loginmain');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
