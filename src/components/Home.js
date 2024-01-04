import { Button, Container , Typography, Card, CardContent, Stack, AppBar} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
 
  const navigate=useNavigate()
 
  return (
    <div>
        <AppBar position='sticky'>
            <Typography variant="h4" component="div" sx={{ paddingLeft:'100px' }}>
                          Home Page
            </Typography>
            <Typography variant="h6" component="div" sx={{ paddingLeft:'100px' }}>
                          This is only for CRUD operation practice
            </Typography>
        </AppBar>
        <Container maxWidth='lg' sx={{ paddingTop:'50px' }}>

        <Stack direction="row" spacing={'10px'}>
            <Card sx={{ width: 200 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                      Admin
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      CRUD Staff Members 
                    </Typography>
                </CardContent>
                <Button size="small" variant="contained" onClick={()=>navigate('admin')} sx={{margin:5}}>Login<LoginIcon></LoginIcon></Button>
            </Card>

            <Card sx={{ width: 200 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                      Receptionist
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      CRUD Appointments 
                    </Typography>
                </CardContent>
                <Button size="small" variant="contained" onClick={()=>navigate('recep')} sx={{margin:5}}>Login<LoginIcon></LoginIcon></Button>
            </Card>


            <Card sx={{ width: 200 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                      Doctor
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      CRUD Patients
                    </Typography>
                </CardContent>
                <Button size="small" variant="contained" onClick={()=>navigate('doct')} sx={{margin:5}}>Login<LoginIcon></LoginIcon></Button>
            </Card>


            <Card sx={{ width: 200 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                      Pharmacy
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      CRUD drugs 
                    </Typography>
                </CardContent>
                <Button size="small" variant="contained" onClick={()=>navigate('pharm')} sx={{margin:5}}>Login<LoginIcon></LoginIcon></Button>
            </Card>


            <Card sx={{ width: 200 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                      Lab
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      CRUD test templates
                    </Typography>
                </CardContent>
                <Button size="small" variant="contained" onClick={()=>navigate('lab')} sx={{margin:5}}>Login<LoginIcon></LoginIcon></Button>
            </Card>
        </Stack>
        </Container>
    </div>
  )
}
