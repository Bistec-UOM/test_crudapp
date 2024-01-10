import { Container } from "react-bootstrap"
import { TextField, Typography } from "@mui/material";

import { useState } from "react";

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Button from "@mui/material/Button";

const EditPage=({alist,setAList,count,setCount,name ,setName,address, setAddress, nic,setNic, timevalue, setTimeValue,nameError,setNameError,addressError,setAddressError,nicError,setNicError,timevalueError,setTimeValueError})=>
{


    const handleSubmit=(event)=>
    {
        event.preventDefault();
        if(nameError==true)
        {
            setNameError(false)
        }
        if(addressError==true)
        {
            setAddressError(false)
            
        }
        if(nicError==true)
        {
            setNicError(false)
        }
        if(name=="")
        {
            setNameError(true)
        }
        if(address=="")
        {
            setAddressError(true)
        }
        if(nic=="")
        {
            setNicError(true)
        }

        if(name && address && nic)
        {
            setAList([...alist,{name:name,address:address,nic:nic,timevalue:timevalue.format('hh:mm A')}]);
            setCount(count+1)
            console.log(typeof(timevalue))
            setName("")
            setAddress("")
            setNic("")
            setTimeValue(dayjs('2022-04-17T15:30'))

        }

      
    }


    return <div>
          <Container>
            <Typography textAlign="center" variant="h4" color="GrayText"   marginBottom="25px" marginTop="10px">Make your Appointment</Typography>
        <form autoComplete="false" noValidate onSubmit={handleSubmit}>
            <TextField error={nameError} sx={{marginBottom:3}} required value={name}  onChange={(e)=>{
                setName(e.target.value)

            }} fullWidth variant="outlined" color="secondary" label="PatientName"></TextField>
             <TextField error={addressError}  sx={{marginBottom:3}} value={address} required onChange={(e)=>{
                setAddress(e.target.value)

            }} fullWidth variant="outlined" color="secondary" label="Address"></TextField>
             <TextField error={nicError} sx={{marginBottom:3}} required value={nic}  onChange={(e)=>{
                setNic(e.target.value)

            }} fullWidth variant="outlined" color="secondary" label="Nic"></TextField>
             <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker', 'TimePicker']}>
        <TimePicker
          label="Select your Time"
          value={timevalue}
          error={timevalueError}
           
         
          onChange={(newvalue) => {
            // Use format method to get the time as a string
           
            setTimeValue(newvalue);
          }}
          
        />
       
      </DemoContainer>
    </LocalizationProvider>

    <Button sx={{marginTop:3, color: '#09D636',marginBottom:3}} variant="outlined"  type="submit" >Add</Button>
    
           
            
      
        </form> 

        </Container>


    </div>
}

export default EditPage;