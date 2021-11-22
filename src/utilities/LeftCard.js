import React, { useState } from "react";
import { useUserState } from "./firebase";
import "./css/LeftCard.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DateAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import {Typography} from "@mui/material";

import { useData } from "./firebase";

const Descriptions = {
  description: "Subscriptions",
};

const SubscriptionBar = ({ name, price, date, index, deleteSubscription, status }) => {
  const [isClicked, setIsClicked] = useState(false)

  const ListItemStyleStatic = {
    borderRadius: 2,
    bgcolor: "rgba(255, 255, 255, 0.9)",
    boxShadow: 2,
    marginBottom: 2,
    width: "170%",
  }

  const ListItemStyleLogin = {
    borderRadius: 2,
    bgcolor: "rgba(255, 255, 255, 0.9)",
    boxShadow: 2,
    marginBottom: 2,
    width: "80%",
  }

  const clicked = () => {
    setIsClicked(!isClicked)
  }

  const mouseLeave = () => {
    if(isClicked) setTimeout(()=>{setIsClicked(!isClicked)}, 500);
  }

  return (
    <ListItem disablePadding sx={() => {return status === 1 ? ListItemStyleStatic : ListItemStyleLogin}}>
      <ListItemButton onClick={clicked}
                      onMouseLeave={mouseLeave}>
        <ChevronRightIcon />
        <ListItemText primary={name} style={{textAlign:"center"}}/>
        <ListItemText primary={"$ " + price} style={{textAlign:"center"}} />
        <ListItemText primary={typeof date === "string" ? date : date.toDateString()} style={{textAlign:"center"}} />
        {isClicked && <Button onClick={() => deleteSubscription(index)}>Delete?</Button>}
      </ListItemButton>
    </ListItem>
  );
};

const SubscriptionList = ({ subscriptions, setSubscriptions }) => {
  const deleteSubscription = (index) => {
    let subsCopy = subscriptions;
    subsCopy.splice(index,1);
    console.log(subsCopy);
    setSubscriptions(subsCopy);
  }
  return (
    <List>
      {subscriptions.map((e, index) => (
        <SubscriptionBar name={e.name} price={e.price} date={e.date} index={index} deleteSubscription={deleteSubscription} status={0}/>
      ))}
    </List>
  );
};

const FormModal = ({ open, handleClose, closeModal }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState('');
  const today = new Date();
  const [date, setDate] = useState(today);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "rgba(255, 255, 255, .95)",
    borderRadius: 8,
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexFlow: "column nowrap",
    padding: "5rem",
  };

  const inputStyle = {
    margin: "0.5rem 0",
    marginBottom: "15px",
  };

  const handleCloseModal = (name, price, date) => {
    handleClose(name, price, date);
    setName('')
    setPrice('')
    setDate(today)
  }

  return (
    <Modal
      open={open}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography sx={inputStyle}> Enter Subscription Data: </Typography>
        <TextField
          sx={inputStyle}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(newName) => setName(newName.target.value)}
        />
        <TextField
          sx={inputStyle}
          label="Price"
          value={price}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          onChange={(newPrice) => setPrice(newPrice.target.value)}
        />
        <LocalizationProvider sx={inputStyle} dateAdapter={DateAdapter} >
          <DatePicker
            sx={inputStyle}
            label="Due Date"
            value={date}
            onChange={(newDate) => {
              setDate(newDate.$d);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button
          style={{marginTop: "20px"}}
          variant="contained"
          onClick={() => handleCloseModal(name, price, date)}
        >
          Submit Subscription
        </Button>
      </Box>
    </Modal>
  );
};

const LeftCardStatic = () => {
  const style = {
    borderRadius: 2,
    marginTop: 10,
    marginLeft: 10,
  }

  return (
    <div>
      <div className="descriptions">
        <div>{Descriptions.description}</div>
        <List sx={style}>
          <SubscriptionBar name={"Netfix"} price={17.99} date={new Date()} index={0} deleteSubscription={()=>{}} status={1} />
          <SubscriptionBar name={"Adobe"} price={19.99} date={new Date()} index={1} deleteSubscription={()=>{}} status={1} />
          <SubscriptionBar name={"Spotify"} price={4.99} date={new Date()} index={2} deleteSubscription={()=>{}} status={1} />
          <SubscriptionBar name={"Paste"} price={14.99} date={new Date()} index={3} deleteSubscription={()=>{}} status={1} />
        </List>
      </div>
    </div>
  );
};

const reformatPath = (path) => path.replace(/[^A-Z0-9]+/ig, "_");

const LeftCardLogin = ({ subscriptions, setSubscriptions, handleOpen, handleClose, closeModel, open, user }) => {
  // const updateSubscriptions = (dataSnapshot) => {
  //   let subCopy = [];
  //   if (dataSnapshot != null && dataSnapshot.subscriptions != null){
  //     Object.values(dataSnapshot.subscriptions).map(subscription => subCopy.push({
  //       name: subscription.name,
  //       price: subscription.price,
  //       date: subscription.data
  //     }));
  //   }
  //   setSubscriptions(subCopy);
  // };

  console.log(reformatPath(user.email));

  const [subscriptionsData, loading, error] = useData("/" + reformatPath(user.email) + "/subscriptions");
  setSubscriptions(subscriptionsData);

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the subscriptions...</h1>;

  // updateSubscriptions(subscriptionsData);
  console.log(subscriptions);

  return (
      <div className="leftCardLogin">
        {subscriptions != null && subscriptions.length > 0 && (
            <SubscriptionList subscriptions={subscriptions} setSubscriptions={setSubscriptions} />
        )}
        <Button padding={10} margin={5} variant="contained" onClick={handleOpen}>
          Add Subscription
        </Button>
        <FormModal
            open={open}
            handleClose={handleClose}
            closeModal={closeModel}
        />
      </div>
  );
};


export const LeftCard = ({ subscriptions, setSubscriptions }) => {
  const [user] = useUserState();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const closeModel = () => {
    setOpen(false);
  };

  const handleClose = (name, price, date) => {
    console.log(name, price, date);
    let subsCopy = subscriptions;
    if (name && price && date) {
      subsCopy.push({ name: name, price: price, date: date });
      setSubscriptions(subsCopy);
      setOpen(false);
    } else {
      alert('Enter valid inputs')
    }
  };

  return (
    <div className="leftcard">
      {user ? <LeftCardLogin subscriptions={subscriptions}
                             setSubscriptions={setSubscriptions}
                             handleOpen={handleOpen}
                             handleClose={handleClose}
                             closeModel={closeModel}
                             open={open}
                             user={user} /> : <LeftCardStatic />}
    </div>
  );
};
