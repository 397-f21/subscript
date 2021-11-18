import React, { useState } from "react";
import { useUserState } from "./firebase";
import "./css/LeftCard.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
//import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DateAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Typography } from "@mui/material";
// import { findAllByTestId } from "@testing-library/react";

const Descriptions = {
  description: "Subscriptions",
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

const FormModal = ({ open, handleClose, closeModal }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState('');
  const [date, setDate] = useState(undefined);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
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
    setDate(undefined)
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
  return (
    <div>
      <div className="descriptions">
        <div>{Descriptions.description}</div>
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

  const closeModal = () => {
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
      {user ? <LeftCardLogin /> : <LeftCardStatic />}
      {subscriptions.length > 0 && (
        <SubscriptionList subscriptions={subscriptions} />
      )}
      <Button padding={10} margin={5} variant="contained" onClick={handleOpen}>
        Add Subscription
      </Button>
      <FormModal
        open={open}
        handleClose={handleClose}
        closeModal={closeModal}
      />
    </div>
  );
};
