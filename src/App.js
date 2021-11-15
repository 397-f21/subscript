import React from "react";
import {LeftCard} from "./utilities/LeftCard";
import {RightCard} from "./utilities/RightCard";
import "./App.css";

const Title = {
    title: "subscript",
    subtitle: "Manage your subscriptions today!",
    descriptionLine1: "Never pay for an unwanted subscription again! " +
      " subscript instantly finds and tracks your subscriptions." ,
    descriptionLine2: "Your concierge is there when you need them to cancel services so you don’t have to."
};

export const Banner = ({ title, subtitle, descriptionLine1, descriptionLine2 }) => {
  return (<div className="Banner" data-cy="Banner">
      <img
          data-cy="logo"
          src="https://i.loli.net/2021/11/14/2crIksEnlbBHjxz.png"
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
  return (
      <div className="container">
        <Banner title={Title.title}
                subtitle={Title.subtitle}
                descriptionLine1={Title.descriptionLine1}
                descriptionLine2={Title.descriptionLine2}
        />
        <div className="body-container">
            <LeftCard className="leftcard"/>
            <RightCard className="rightcard"/>
        </div>
      </div>
  );
};

export default App;
