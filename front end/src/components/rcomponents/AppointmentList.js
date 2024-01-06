import { useEffect } from "react"
import { Container } from "react-bootstrap"
import AppointmentCard from './AppointmentCard'
import Popup from "./Popup"
import React from "react"
import { useState } from "react"


const AppointmentList=({alist,setAList,count,setCount,name ,setName,address, setAddress, nic,setNic, timevalue, setTimeValue,nameError,setNameError,addressError,setAddressError,nicError,setNicError,timevalueError,setTimeValueError})=>
{
    

    useEffect(()=>
    {
        

    },[count]);

    return <div>
        <Container>
            {alist.map((item)=>(
                <AppointmentCard name={name} setName={setName} address={address} setAddress={setAddress} nic={nic} setNic={setNic} timevalue={timevalue} setTimeValue={setTimeValue} alist={alist} setAList={setAList} count={count} setCount={setCount}   key={item.nic} item={item}></AppointmentCard>
            ))}
           
        </Container>

    </div>
}

export default AppointmentList;