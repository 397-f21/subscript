import React, { useState } from "react";
import { useUserState } from "./firebase";
import "./css/LeftCard.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
//import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DateAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const Descriptions = {
  description: "This is the description",
};

const LeftCardLogin = () => {
  return (
    <div>
      <p>null</p>
    </div>
  );
};

const SubscriptionBar = ({ name, price, date }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText primary={name} />
        <ListItemText primary={price} />
        <ListItemText primary={date.toDateString()} />
      </ListItemButton>
    </ListItem>
  );
};

const SubscriptionList = ({ subscriptions }) => {
  return (
    <List>
      {subscriptions.map((e) => (
        <SubscriptionBar name={e.name} price={e.price} date={e.date} />
      ))}
    </List>
  );
};

const FormModal = ({ open, handleClose }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(undefined);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(newName) => setName(newName.target.value)} />
        <TextField  label="Price" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' } } onChange={(newPrice) => setPrice(newPrice.target.value)} />
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DatePicker
            label="Basic example"
            value={date}
            onChange={(newDate) => {
              setDate(newDate.$d);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button variant="contained" onClick={() => handleClose(name, price, date)}>
        Submit Subscription
      </Button>
      </Box>
    </Modal>
  );
};

const LeftCardStatic = () => {


  return (
    <div>
      <div className="descriptions">
        <div>{Descriptions.description}</div>
        <div className="subscribeImg">
          <img
            src="https://i.loli.net/2021/11/15/k7xObUzhgY2Vjty.gif"
            alt="subscribe"
            style={{ height: 130, width: 130 }}
          />
        </div>
      </div>
      

      {/* <div className="demoList">
                <div className="demoItem">
                    <spanc className="column1">
                        <img
                            src="https://i.loli.net/2021/11/15/LZAwp2WV38J9zhu.png"
                            alt="Netflix"
                            style={{width:30, height:30}}/>
                    </spanc>
                    <span className="column2">Netfix</span>
                    <span className="column3">$17.99</span>
                </div>
                <div className="demoItem">
                    <span className="column1">
                        <img
                            src="https://i.loli.net/2021/11/15/d8Ls5IxvwW7POug.png"
                            alt="Adobe"
                            style={{width:30, height:30}}/>
                    </span>
                    <span className="column2">Adobe</span>
                    <span className="column3">$19.99</span>
                </div>
                <div className="demoItem">
                    <span className="column1">
                        <img
                            src="https://i.loli.net/2021/11/15/zfo6EG4AdhimQ3n.png"
                            alt="Spotify"
                            style={{width:30, height:30}}/>
                    </span>
                    <span className="column2">Spotify</span>
                    <span className="column3">$4.99</span>
                </div>
            </div> */}
    </div>
  );
};

export const LeftCard = ({ subscriptions, setSubscriptions }) => {
  const [user] = useUserState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
   setOpen(true);
  };

  const handleClose = (name, price, date) => {
      console.log(name, price, date)
      let subsCopy = subscriptions;
      subsCopy.push({name: name, price: price, date: date})
      setSubscriptions(subsCopy);
      setOpen(false);
  }

  return (
    <div className="leftcard">
      {user ? <LeftCardLogin /> : <LeftCardStatic />}
      {subscriptions.length > 0 &&  <SubscriptionList subscriptions={subscriptions} />}
      <Button variant="contained" onClick={handleOpen}>
        Add Subscription
      </Button>
      <FormModal open={open} handleClose={handleClose} />
    </div>
  );
};
