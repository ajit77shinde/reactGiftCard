export default function validate(values) {
    let errors = {};
console.log("values = ", values)
    const regex = new RegExp("^[7-9][0-9]{9}$")
    if (!values.mobileNo) {
        errors.mobileNo = 'Mobile No is required';
      } else if (!regex.test(values.mobileNo)) {
        errors.mobileNo = 'Mobile No is invalid';
      }
    // if (!values.email) {
    //   errors.email = 'Email address is required';
    // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //   errors.email = 'Email address is invalid';
    // }
    // if (!values.password) {
    //   errors.password = 'Password is required';
    // } else if (values.password.length < 8) {
    //   errors.password = 'Password must be 8 or more characters';
    // }
    return errors;
  };
  