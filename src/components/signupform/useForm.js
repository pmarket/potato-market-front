import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import AuthApi from 'apis/AuthApi';
import AuthService from 'services/AuthService';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      const response = await AuthApi.localSignUp(
        values.email,
        values.username,
        values.password,
      );
      AuthService.setAuthToken(response.data.data);
      history.push('/board');
      setIsSubmitting(true);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
