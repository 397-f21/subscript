import React, {useState} from "react";
import "./App.css";

const Title = {
    title: "subscript",
    subTitleLine1: "Never pay for an unwanted subscription again! " +
      " subscript instantly finds and tracks your subscriptions." ,
    subTitleLine2: "Your concierge is there when you need them to cancel services so you don’t have to."
};

export const Banner = ({ title, subTitleLine1, subTitleLine2 }) => {
  return (<div className="App-Title">
    <p></p>
    <img
        data-cy="logo"
        src="https://i.loli.net/2021/11/14/2crIksEnlbBHjxz.png"
        alt="AppLogo"
        style={{ width: 50, height: 45 }}
    />
    <h1 data-cy="title">{title}</h1>
    <div data-cy="subtitle">
        <i><p>{subTitleLine1}</p></i>
        <i><p>{subTitleLine2}</p></i>
    </div>
  </div>)
};

const App = () => {
  return (
      <div className="container">
        <Banner title={Title.title} subTitleLine1={Title.subTitleLine1} subTitleLine2={Title.subTitleLine2} />
        <div className="body-container">

        </div>
      </div>
  );
};

export default App;
