import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "../components/styles/shipping.css";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';

function ShippingAddress() {
  const navigate= useNavigate()
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address:"",
      email: "",
      apartment: "",
      city: "",
      state: "",
      postalcode: "",
    },
    onSubmit: (values) => {
      navigate("/PaymentMethod")
      
    },
    validate:(values)=>{
      
      let errors ={}
      let regexForPhoneNumber= /^[\d]{11}$/
      // let regexForEmail= /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
      if(values.firstName===""){
        errors.firstName="This field is required"
      }else if(values.firstName.length <4){
        errors.firstName="Inputed character is less than Four"
      }
      if(values.lastName===""){
        errors.lastName="This field is required"
      }else if(values.lastName.length <4){
        errors.lastName="Inputed character is less than Four"
      }
      if(values.phoneNumber===""){
        errors.phoneNumber="This field is required"
      }else if(!regexForPhoneNumber.test(values.phoneNumber)){
        errors.phoneNumber="The phone number must be 11 (eleven digit)"
      }
      if(values.email===""){
        errors.email="This field is required"
      }
      // else if(!regexForEmail.test(values.email)){
      //   errors.email="Please provide a valid Email"
      // }
      if(values.city===""){
        errors.city="This field is required"
      }
      if(values.state===""){
        errors.state="This field is required"
      }
      if(values.postalcode==="" ){
        errors.postalcode="This field is required"
      }
      if(values.address===""){
        errors.address="This field is required"
      }
    
      return errors 
     
    }
    
  });
  
  const steps = ["Log in", "Shipping Address", "Payment Method","Place Order",];
  return (
    <div>

      <div className="container">
        <div>
          <h2>Shipping Details</h2>

          {/* stepper starts here */}

          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          {/* Stepper ends here */}
        </div>

          <div className="mt-3">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="" onSubmit={formik.handleSubmit}>
                  <div className="row ">
                    <div className="col-6 ">
                      <TextField
                        id="outlined-basic"
                        label="FirstName"
                        variant="outlined"
                        className="w-100"
                        name="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                      />
                      {formik.touched.firstName?<small className="text-danger">{formik.errors.firstName}</small>:""}
                    </div>
                    <div className="col-6 ">
                      <TextField
                        id="outlined-basc"
                        label="LastName"
                        variant="outlined"
                        className="w-100 "
                        name="lastName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.lastName?<small className="text-danger">{formik.errors.lastName}</small>:""}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 mt-3">
                      <TextField
                        id="outlined-basic"
                        label="Phone number"
                        variant="outlined"
                        className="w-100"
                        name="phoneNumber"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.phoneNumber?<small className="text-danger">{formik.errors.phoneNumber}</small>:""}
                    </div>
                    <div className="col-6 mt-3">
                      <TextField
                        id="outlined-basic"
                        type="email"
                        label="Email"
                        variant="outlined"
                        className="w-100"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                       {formik.touched.email?<small className="text-danger">{formik.errors.email}</small>:""}
                    </div>
                  </div>
                  <TextField
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                    className="w-100 mt-3"
                    name="address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.address?<small className="text-danger">{formik.errors.address}</small>:""}
                  <TextField
                    id="outlined-basic"
                    label="Apartment,Suite,Unit etc. (optional)"
                    variant="outlined"
                    className="w-100 mt-3"
                    name="apartment"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  
                  <TextField
                    id="outlined-basic"
                    label="Town/City"
                    variant="outlined"
                    className="w-100 mt-3"
                    name="city"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                    {formik.touched.city?<small className="text-danger">{formik.errors.city}</small>:""}

                  <div className="row ">
                    <div className="col-6 mt-3">
                      <TextField
                        id="outlined-basic"
                        label="State"
                        variant="outlined"
                        className="w-100"
                        name="state"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                        {formik.touched.state?<small className="text-danger">{formik.errors.state}</small>:""}
                    </div>
                    <div className="col-6 mt-3">
                      <TextField
                        id="outlined-basic"
                        label="Postalcode/Zip"
                        variant="outlined"
                        className="w-100"
                        name="postalcode"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                     
                     {formik.touched.postalcode?<small className="text-danger">{formik.errors.postalcode}</small>:""}
                    </div>
                  </div>

                  {/* continue button starts here */}
                  <div className="mt-3">
                    <button className="continueBtn" type="submit" >
                      Continue
                    </button>
                  </div>

                  {/* continue button ends here */}
                </form>
              </div>
            </div>
          </div>

          </div>
    
      </div>
    </div>
  );
}

export default ShippingAddress;
