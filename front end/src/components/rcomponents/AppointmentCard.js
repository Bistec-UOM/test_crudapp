import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import Popup from "./Popup";

const AppointmentCard = ({
  item,
  alist,
  setAList,
  count,
  setCount,
  name,
  setName,
  address,
  setAddress,
  nic,
  setNic,
  timevalue,
  setTimeValue
}) => {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    setAList(alist.filter((itemf) => itemf.nic !== item.nic));
  };

  const handleEdit = () => {
    setOpen(true);
  };

  const formatTime = (time) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true, // Set to true for AM/PM format
    }).format(new Date(time));
  };
  

  return (
    <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
      <Card
        sx={{
          backgroundColor: "#DEF4F2",
          textAlign: "left",
          marginBottom: 10
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {item.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.nic}
            <br />
            {formatTime(item.time)}
          </Typography>
        </CardContent>
        <CardActions>
          <EditIcon sx={{color:'#F66444',marginRight:2}} onClick={handleEdit}  />
          <DeleteIcon onClick={handleDelete} sx={{ marginLeft: "auto",color:'#E60000' }} />
        </CardActions>
      </Card>
      <Popup
        item={item}
        name={name}
        setName={setName}
        address={address}
        setAddress={setAddress}
        nic={nic}
        setNic={setNic}
        timevalue={timevalue}
        setTimeValue={setTimeValue}
        alist={alist}
        setAList={setAList}
        count={count}
        setCount={setCount}
        open={open}
        setOpen={setOpen}
      ></Popup>
    </div>
  );
};

export default AppointmentCard;
