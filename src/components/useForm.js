import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors , setErrors] = useState({mobileNo :true});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {

    console.log("in user Effects use form")
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);
  useEffect( () =>{
    console.log("values in useEffect = ", values)
    setErrors(validate(values));

  }, [values])

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    // setErrors(validate(values));

  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;