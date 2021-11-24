import React, {useState} from "react";
import {LeftCard} from "./utilities/LeftCard";
import {RightCard} from "./utilities/RightCard";
import {Bottom} from "./utilities/bottomBar";
import "./App.css";

const Title = {
    title: "subscript",
    subtitle: "manage your subscriptions today!",
    descriptionLine1: "subscript will track your subscriptions so you don't have to...",
    descriptionLine2: "sign in today!"
};

export const Banner = ({ title, subtitle, descriptionLine1, descriptionLine2 }) => {
  return (
      <div className="Banner" data-cy="Banner">
          <img
              data-cy="logo"
              src="https://i.loli.net/2021/11/16/CA6pPW1X8zIeGVL.png"
              alt="AppLogo"
              style={{ width: 60, height: 60}}
          />
          <div className="App-Title"> {title} </div>
          <div className="App-Subtitle"> <p>{subtitle}</p> </div>
          <div className="App-Description">
              <i>{descriptionLine1}</i>
              <i><p>{descriptionLine2}</p></i>
          </div>
    </div>)
};

const App = () => {
    const [subscriptions, setSubscriptions] = useState([]);

    return (
        <div className="container">
            <Banner title={Title.title}
                  subtitle={Title.subtitle}
                  descriptionLine1={Title.descriptionLine1}
                  descriptionLine2={Title.descriptionLine2}
            />
            <img
              src="https://i.loli.net/2021/11/20/XMDjPehqRVQ9JK5.png"
              alt="backgroundImg"
              className="backgroundImg"
            />
            <div className="body-container">
              <LeftCard className="leftcard" subscriptions={subscriptions} setSubscriptions={setSubscriptions} />
              <RightCard className="rightcard"/>
            </div>
            <div className="bottom">
              <Bottom />
            </div>
        </div>
    );
};

export default App;
