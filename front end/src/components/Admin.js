import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Input,  FormControl,  InputLabel,  FormHelperText,  Checkbox,  Switch,  FormControlLabel,    Stack,  Button,  TextField, Typography } from "@mui/material";
  import Table from '@mui/material/Table';
  import TableBody from '@mui/material/TableBody';
  import TableCell from '@mui/material/TableCell';
  import TableContainer from '@mui/material/TableContainer';
  import TableHead from '@mui/material/TableHead';
  import TableRow from '@mui/material/TableRow';
  import Paper from '@mui/material/Paper';

export default function Admin() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phnNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setcnfPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [checkedUpdates, setCheckedUpdates] = useState(true);

  const navigate=useNavigate()
  function addMember() {
    var payload = {
      firstName,
      lastName,
      email,
      phnNumber,
      dateOfBirth,
      password,
      cnfpassword,
      checked,
      checkedUpdates
    };
    axios.post('https://localhost:7017/api/Admin', payload).then((response) => {
      navigate('/lab');
    });
  }
 
    const [all_d, set_d] = useState([]);
  
    useEffect(() => {
      axios.get("https://localhost:7017/api/Admin")
        .then((response) => {
          set_d(response.data || []);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);



  return (
    <div>
    <Typography gutterBottom variant='h3' align='center'><h2 style={{ color: "Blue" }}>Login for admin</h2></Typography>

    <Grid container justifyContent="center">
    <form align='center' style={{ paddingTop: "10px" }}>
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <FormControl>
          <InputLabel htmlFor="fname">First Name</InputLabel>
          <Input
            autoFocus="true"
            id="fname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <FormHelperText id="my-helper-text">
            Please enter your first name.
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="lname">Last Name</InputLabel>
          <Input
            id="lname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <FormHelperText id="my-helper-text">
            Please enter your last name.
          </FormHelperText>
        </FormControl>
      </Stack>
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <FormControl >
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input
            id="email"
            value={email}
            aria-describedby="my-helper-text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormHelperText id="my-helper-text">
            We will never share your email.
          </FormHelperText>
        </FormControl>
        <FormControl >
          <InputLabel htmlFor="phnNumber">Phone Number</InputLabel>
          <Input
            id="phnNumber"
            value={phnNumber}
            aria-describedby="my-helper-text"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <FormHelperText id="my-helper-text">
            Please enter your phone number here.
          </FormHelperText>
        </FormControl>
      </Stack>
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <FormControlLabel
          control={
            <TextField
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            ></TextField>
          }
          
      />
      <Typography style={{ paddingTop: "10px", paddingLeft: "50px" }}>
  <p>Select your date of birth</p>
</Typography>
      </Stack>
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <FormControl>
          <InputLabel htmlFor="pswd">Password</InputLabel>
          <Input
            type="password"
            id="pswd"
            value={password}
            aria-describedby="my-helper-text"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormHelperText id="my-helper-text">
            Enter your password here.
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="cnfPswd">Confirm Password</InputLabel>
          <Input
            type="password"
            id="cnfPswd"
            value={cnfpassword}
            aria-describedby="my-helper-text"
            onChange={(e) => setcnfPassword(e.target.value)}
          />
          <FormHelperText id="my-helper-text">
            Please re-enter your password here.
          </FormHelperText>
        </FormControl>
      </Stack>
      <Stack>
        <FormControl>
          <FormControlLabel
            control={
              <Switch
                // defaultChecked
                checked={checkedUpdates}
                onChange={(e) => setCheckedUpdates(e.target.checked)}
              />
            }
            label="Receive regular updates."
          />
        </FormControl>
        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                id="agree"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
            }
            label="I agree to the terms and conditions."
          />
        </FormControl>
      </Stack>
      <Button variant="contained" color="success" type="submit" onClick={addMember}>
        Add admin
      </Button>
      <Button variant="contained" sx={{margin:5}} onClick={() => navigate('/')}>
    return back
  </Button>
    </form>
    </Grid>
    <br/>

    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Secound Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Date Of Birth</TableCell>
              {/* Adjust TableCell headers accordingly */}
            </TableRow>
          </TableHead>
          <TableBody>
            {all_d.map((row) => (
              <TableRow
                key={row.id} // Ensure the key matches a unique identifier in your data
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.firstName}</TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phnNumber}</TableCell>
                <TableCell align="right">{row.dateOfBirth}</TableCell>
                {/* Adjust TableCell data accordingly */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  </div>
    
  )
}
