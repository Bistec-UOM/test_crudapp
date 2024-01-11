import React from 'react'
import Header from './rcomponents/Header'
import Form from './rcomponents/From'
import { useState } from 'react'
import AppointmentList from './rcomponents/AppointmentList'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import EditPage from './rcomponents/EditPage'
import dayjs from 'dayjs'
import { useEffect } from 'react'


export default function Receptionist() {
  const [alist,setAList]=useState([])
  const [count,setCount]=useState(0)

    const [name,setName]=useState("")
    const [address,setAddress]=useState("")
    const [nic,setNic]=useState("")

    const [nameError,setNameError]=useState(false)
    const [addressError,setAddressError]=useState(false)
    const [nicError,setNicError]=useState(false)
    const [timevalueError,setTimeValueError]=useState(false)
   

  
   
    const [timevalue, setTimeValue] = useState(dayjs('2022-04-17T15:30'));


    useEffect(()=>
    {
     fetch("https://localhost:7017/api/appointmentapi").then((response)=>
     {
       return response.json();
     }).then((responseData)=>
     {
       console.log(responseData);
       setAList(responseData);
     })
 
    },[count]);

    



  return (
    <div>
       <Header></Header>
       <Form name={name} setName={setName} address={address} setAddress={setAddress} nic={nic} setNic={setNic} timevalue={timevalue} setTimeValue={setTimeValue} alist={alist} setAList={setAList} count={count} setCount={setCount} nameError={nameError} setNameError={setNameError} addressError={addressError} setAddressError={setAddressError} nicError={nicError} setNicError={setNicError} timevalueError={timevalueError} setTimeValueError={setTimeValueError}></Form>
       <AppointmentList  name={name} setName={setName} address={address} setAddress={setAddress} nic={nic} setNic={setNic} timevalue={timevalue} setTimeValue={setTimeValue} alist={alist} setAList={setAList} count={count} setCount={setCount} nameError={nameError} setNameError={setNameError} addressError={addressError} setAddressError={setAddressError} nicError={nicError} setNicError={setNicError} timevalueError={timevalueError} setTimeValueError={setTimeValueError}></AppointmentList>
       {/* <BrowserRouter>
        <Routes>
          <Route element={<EditPage name={name} setName={setName} address={address} setAddress={setAddress} nic={nic} setNic={setNic} timevalue={timevalue} setTimeValue={setTimeValue} alist={alist} setAList={setAList} count={count} setCount={setCount} nameError={nameError} setNameError={setNameError} addressError={addressError} setAddressError={setAddressError} nicError={nicError} setNicError={setNicError} timevalueError={timevalueError} setTimeValueError={setTimeValueError}/>}></Route>
        </Routes>
       </BrowserRouter> */}
      
      
    </div>
  )
}
