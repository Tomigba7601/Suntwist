import React, {useState} from 'react'
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "../components/styles/payment.css";
import { useNavigate } from 'react-router-dom';
// import PaystackPop from "@paystack/inline-js"

function PaymentMethod() {
 const navigate = useNavigate()
  const steps = ["Log in", "Shipping Address", "Payment Method", "Place Order"];

    const [method, setmethod]= useState("")
    console.log(method)
    const [errorMsg, seterrorMsg] = useState("")
    const continueBtn=()=>{
      if(method===""){
        seterrorMsg("Pllease kindly pick a payment method!")     
      }else if(method==="payStack"){

        navigate("/PaymentSummary")
   

      }
    }

  
  return (
    <div>

    {/* stepper starts here */}
    <div className="mt-3">
    <Box sx={{ width: "100%" }}>
            <Stepper activeStep={1,2} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

    </div>
    {/* stepper ends here */}

    {/* error display bar */}
    <div className=" d-flex justify-content-center">
         {errorMsg?<div className="alert alert-danger w-50 text-center ">{errorMsg}</div>:''}

    </div>

    {/* error display bar ends here */}

    <div className="container">
      <h6 className='display-6'>Payment Method</h6>
      <div className="mx-5">
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="PayStack"
        name="radio-buttons-group"
        value={method}
        onChange={(e)=>setmethod(e.target.value)}
      >
        <FormControlLabel value="payStack" control={<Radio />} label="PayStack"  />
        <FormControlLabel value="flutterwave" control={<Radio />} label="Flutterwave" />
        <FormControlLabel value="cash" control={<Radio />} label="Cash" />
        <FormControlLabel value="bankTransfer" control={<Radio />} label="Bank transfer" />
      </RadioGroup>
    </FormControl>
      
      {/* continue and Back button */}
      <div>
        <button className="conBtn" onClick={()=>continueBtn()} >Continue</button>
        <button className="backBtn mt-3">Back</button>
      </div>

      </div>

    </div>

    </div>
  )
}

export default PaymentMethod


