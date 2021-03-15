import { useState } from "react";
import paytemLogo from "../paytm.webp"
import './gift.css';
import validate from "./GiftValidationRules";
import useForm from "./useForm";
import { useHistory } from "react-router-dom";


export const Gift = () => {
  const history = useHistory();
  
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);


  function login() {
    console.log('No errors, submit callback called!');
    localStorage.setItem("mobileNo", values.mobileNo);
    history.push("/thankq");

  }
  console.log("errors = ", errors)
  // console.log("values.mobileNo = ", values.mobileNo)
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="man">man </h2>
        <h2 className="matters" > metters </h2>
        <span className="App-subheader">Congratulation 🥳</span>
      </header>
      <div className="card">
        <img src={paytemLogo} alt="Logo" />
        <div className="gift"> Gift card ₹ 200</div>
      </div>


      <div className="msgContent">You have WON Paytem Gift  Card of Rs 200 for <b>placing order on Man Matters</b></div>

      <div className="form">
        <input autoComplete="off" className={`input ${errors.mobileNo && 'is-danger'}`} value={values.mobileNo || ''} 
        onChange={handleChange} type="text" id="mobileNo" name="mobileNo" placeholder="Enter Mobile No" />
        {/* {errors.mobileNo && (
                    <p className="help is-danger">{errors.mobileNo}</p>
                  )} */}
        <button disabled={errors.mobileNo? true : false} className={ `button ${errors.mobileNo && 'noHover'}` } onClick={(e)=> handleSubmit(e)}>Wow! get my Paytem Gift cards<i className="fa fa-icon fa-angle-right"></i></button>

      </div>

    </div>
  )
}
