import { TextField, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useState } from "react";




const Form=()=>
{
    const [name,setName]=useState("")
    const [address,setAddress]=useState("")
    const [nic,setNic]=useState("")

   

    return <div>
        <Container>
            <Typography textAlign="center" variant="h4" color="GrayText" marginBottom="25px" marginTop="10px">Make your Appointment</Typography>
        <form autoComplete="false" noValidate>
            <TextField sx={{marginBottom:3}} required  onChange={(e)=>{
                setName(e.target.value)

            }} fullWidth variant="outlined" color="secondary" label="PatientName"></TextField>
             <TextField  sx={{marginBottom:3}} required onChange={(e)=>{
                setAddress(e.target.value)

            }} fullWidth variant="outlined" color="secondary" label="Address"></TextField>
             <TextField sx={{marginBottom:3}} required  onChange={(e)=>{
                setNic(e.target.value)

            }} fullWidth variant="outlined" color="secondary" label="Nic"></TextField>
           
            
      
        </form> 

        </Container>
       
        
    </div>
}

export default Form;