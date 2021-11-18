import React, {useState} from "react";
import {LeftCard} from "./utilities/LeftCard";
import {RightCard} from "./utilities/RightCard";
import "./App.css";

const Title = {
    title: "subscript",
    subtitle: "manage your subscriptions today!",
    descriptionLine1: "subscript will track your subscriptions so you don't have to!",
    descriptionLine2: "keep track of which subscriptions you use & cancel the ones you don't"
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

const Bottom = () => {
    return (
        <div>
          <img
              data-cy="logo"
              src="https://i.loli.net/2021/11/16/CA6pPW1X8zIeGVL.png"
              alt="AppLogo"
              style={{ width: 40, height: 40, padding: 10}}
          />
        </div>
    )
}

const App = () => {
    const [subscriptions, setSubscriptions] = useState([]);

  return (
      <div className="container">
          <Banner title={Title.title}
                  subtitle={Title.subtitle}
                  descriptionLine1={Title.descriptionLine1}
                  descriptionLine2={Title.descriptionLine2}
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
