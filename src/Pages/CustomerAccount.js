import React, {useState} from 'react'
import "../components/styles/customerAccount.css";
import { BsPencil  } from "react-icons/bs";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
function CustomerAccount() {
    // const [open, setOpen] = React.useState(false);
    const [open, setOpen] = useState(false)
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div>
               <div className="container">
            <div className="row">
                <div className='col-12 '>
                    <h1 className=''>Details Overview</h1>
                    <hr/>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-sm-12 col-md-12 col-lg-5  col-xl-5 col-xxl-5 shadow m-lg-2 m-xl-2 m-xxl-2' >
                            <div className="">
                            <span className="accountdetailsText">Account Details</span>
                            <span className="float-end">
                        <Button variant="" onClick={handleClickOpen}>
                        <BsPencil  size="5vh" className='editIcon'/>
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
                           </span>
                        <hr />
                            </div>
                            <div className="">
                           <p>Oyebanji Ayodeji</p>
                           <p>oye@gmail.com</p>

                           <p className="text-success">Change Password</p>

                            </div>

                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-5 shadow m-lg-2 m-xl-2 m-xxl-2'>
                        <div className="">
                            <span className="accountdetailsText">Address </span>
                        <span className="float-end">
                        <Button variant="" onClick={handleClickOpen}>
                        <BsPencil  size="5vh" className='editIcon'/>
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
                           </span>
                        <hr />
                            </div>
                            <div className="">
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aliquam ipsum, laboriosam dicta, excepturi cupiditate suscipit expedita doloremque voluptatibus consequuntur officia!

                          
                          
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

            
        </div>
    )
}

export default CustomerAccount
