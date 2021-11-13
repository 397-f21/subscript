import React, {useState} from "react";
import "./App.css";

const Title = {
  title: "subscript",
  subTitle: "Never pay for an unwanted subscription again! " +
      "subscript instantly finds and tracks your subscriptions. " +
      "Your concierge is there when you need them to cancel services so you don’t have to.",
};

export const Banner = ({ title, subTitle }) => {
  return (<div className="App-Title">
    <img
        data-cy="logo"
        src="https://i.loli.net/2021/11/14/2crIksEnlbBHjxz.png"
        alt="AppLogo"
        style={{ width: 50, height: 45 }}
    />
    <h1 data-cy="title">{title}</h1>
    <i data-cy="subtitle">
      <p>{subTitle}</p>
    </i>
  </div>)
};

const App = () => {
  return (
      <div className="container">
        <Banner title={Title.title} subTitle={Title.subTitle} />
        <div className="body-container">

        </div>
      </div>
  );
};

export default App;
