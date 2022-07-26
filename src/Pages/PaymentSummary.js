import React from 'react'
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "../components/styles/PaymentSummary.css";
// import PaystackPop from "@paystack/inline.js"
import PaystackPop from "@paystack/inline-js";

function PaymentSummary() {
    const steps = ["Log in", "Shipping Address", "Payment Method", "Place Order"];
    const testAmount= 2000
    const email ="oyeayodejioyebanji2003@gmail.com"
    const name ="Ayodeji"
    // const testLastName= "oyebanji"

    const placeOrder=()=>{
      const paystack =new PaystackPop()
      paystack.newTransaction({
        key:"pk_test_ed25488c82fa1f046570ffc24810820108a34ed4",
        amount: testAmount *100,
          email,
        name,
        // testLastName,

        onSuccess(transaction){
          let message= `Payment completed! Ref ${transaction.reference}`
          alert(message)
        },

        onCancel(){

          alert ("You have canceleed the transaction")
        }


        

      })

    }
  return (
    <div>

     {/* stepper starts here */}
     <div className="mt-3">
    <Box sx={{ width: "100%" }}>
            <Stepper activeStep={1, 2, 3} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

    </div>
 {/* stepper ends here */}

        <div className="container">
            <div className="row">
                <div className='col-12'>
                    <div className='row'>

                        <div className='col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9 '>
                    <div className='placeOrderText'>
                    <h2 className='display-6 mt-2'>Order Summary</h2>
                    </div>

                    <div className='shippingDetails shadow'>
                        <p className="descriptionText p-3">Shipping Address</p>
                        
                        

                    </div>

                    <div className='shippingDetails shadow mt-2'>
                        <p className="descriptionText p-3">Payment Method</p>

                    </div>


                    {/* table starts here */}

                    <div className='shippingDetailsTable shadow mt-2'>
                    <p className="descriptionText p-3">Order Item</p>
                    

                    <table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name of Product</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
                    </div>



                        </div>
                        
                        <div className=' checkOutDiv col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 shadow'>
                         <p className="descriptionText text-center">Order Summary</p>
                         <hr />
                  <div className='row'>
                    <div className='col-12'>
                      <div className="row">
                        <div className="col-12">
                          <p>Items: <span className='float-end'>#300</span> </p>
                          <p>Shipping: <span className='float-end'>#300</span> </p>
                        </div>
                        <div className="d-flex justify-content-center">
                        <button className="placeOrderBtn" onClick={()=>placeOrder()}>Place Order</button>

                        </div>

                        

                      </div>

                    </div>

                  </div>
                        
                    
                            



                        </div>

                    </div>

                </div>

            </div>

        </div>



    </div>
  )
}

export default PaymentSummary