import * as React from 'react';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Container } from "react-bootstrap"
import { TextField, Typography } from "@mui/material";

import { useState } from "react";

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Button from "@mui/material/Button";

export default function Popup({item,open,setOpen,alist,setAList,count,setCount,name ,setName,address, setAddress, nic,setNic, timevalue, setTimeValue,nameError,setNameError,addressError,setAddressError,nicError,setNicError,timevalueError,setTimeValueError}) {
  


    const [enameError,seteNameError]=useState(false)
    const [eaddressError,seteAddressError]=useState(false)
    const [enicError,seteNicError]=useState(false)
    const [etimevalueError,seteTimeValueError]=useState(false)

    const [ename,setEName]=useState(item.name)
    const [eaddress,setEAddress]=useState(item.address)
    const [enic,setENic]=useState(item.nic)
    const [etimevalue, setETimeValue] = useState(dayjs('2022-04-17T15:30'));


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit=(event)=>
  {
      event.preventDefault();
      if(enameError==true)
      {
          seteNameError(false)
      }
      if(eaddressError==true)
      {
          seteAddressError(false)
          
      }
      if(enicError==true)
      {
          seteNicError(false)
      }
      if(ename=="")
      {
          seteNameError(true)
      }
      if(eaddress=="")
      {
          seteAddressError(true)
      }
      if(enic=="")
      {
          seteNicError(true)
      }

      if (ename && eaddress && enic) {
        const updatedList = alist.map((appointment) => {
            if (appointment.nic === item.nic) {
                // Update the properties of the matching appointment
                return {
                    ...appointment,
                    name: ename,
                    address: eaddress,
                    nic: enic,
                    timevalue: etimevalue.format('hh:mm A'),
                };
            }
            return appointment;
        });

        setAList(updatedList);
        handleClose();
    }


    
  }



  return (
    <React.Fragment>
    
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit your Appointment</DialogTitle>
        <DialogContent>
        <form autoComplete="false" noValidate onSubmit={handleSubmit}>
            <TextField error={enameError} sx={{marginBottom:3,marginTop:1}} required value={ename}  onChange={(e)=>{
                setEName(e.target.value)

            }} fullWidth variant="outlined" color="secondary" label="PatientName"></TextField>
             <TextField error={eaddressError}  sx={{marginBottom:3}} value={eaddress} required onChange={(e)=>{
                setEAddress(e.target.value)

            }} fullWidth variant="outlined" color="secondary" label="Address"></TextField>
             <TextField error={enicError} sx={{marginBottom:3}} required value={enic}  onChange={(e)=>{
                setENic(e.target.value)

            }} fullWidth variant="outlined" color="secondary" label="Nic"></TextField>
             <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker', 'TimePicker']}>
        <TimePicker
          label="Select your Time"
          value={etimevalue}
          error={etimevalueError}
           
         
          onChange={(newvalue) => {
            // Use format method to get the time as a string
           
            setETimeValue(newvalue);
          }}
          
        />
       
      </DemoContainer>
    </LocalizationProvider>

   
    <Button  sx={{
        marginTop:3,
        marginBottom:3,
        backgroundColor: '#79CCBE', // Replace with your desired color
        '&:hover': {
          backgroundColor: '#79CCBE', // Replace with your desired hover color
        },
      }} variant="contained"  type="submit" >Edit</Button>
    
           
            
      
        </form> 
  
        </DialogContent>
        <DialogActions>
          
          <Button sx={{color:'#6A0303'}} onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}