import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const { REACT_APP_API_URI } = process.env;

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

  const handleSubmit = (e) => {
    setErrors(validate(values));
    axios
      .post(`${REACT_APP_API_URI}/api/v1/signup/local`, {
        email: values.email,
        name: values.username,
        password: values.password,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.data);
        history.push('/');
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
    e.preventDefault();
    setIsSubmitting(true);
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
