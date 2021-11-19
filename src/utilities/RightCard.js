import React from "react";
import { useUserState } from "./firebase";
import "./css/RightCard.css"
import { PieChart } from 'react-minimal-pie-chart';

const dataMock = [
    { title: 'Netfix', value: 17.99, color: 'rgba(252, 108, 70, 0.9)' },
    { title: 'Adobe', value: 19.99, color: 'rgba(28, 133, 255, 0.9)' },
    { title: 'Spotify', value: 4.99, color: 'rgba(255, 194, 59, 0.9)' },
    { title: 'Paste', value: 14.99, color: 'rgba(233, 166, 153, 0.9)'},
];


const RightCardStatic = () => {
    return (
        <div>
            <PieChart data={dataMock}
                      radius={30}
                      segmentsShift={(index) => (index === 0 ? 3 : 0.7)}
                      label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
                      labelStyle={(index) => ({
                          fill: "white",
                          fontSize: '5px',
                          fontFamily: 'sans-serif',
                      })}
                      onMouseOver={(e, segmentIndex) => {

                      }}
                      onMouseOut={(e, segmentIndex) => {

                      }}
                      onClick={(e, segmentIndex) => {

                      }}
                      animate
            />;
        </div>
    )
}

const RightCardLogin = () => {
    return (
        <div>
            {<p>you have logged in</p>}
        </div>
    )
}

export const RightCard = () => {
    const [user] = useUserState();

    return (
        <div className="rightcard">
            <div>
                { user ?  <RightCardLogin /> : <RightCardStatic /> }
            </div>

            {/*<div className="subscribeImg">*/}
            {/*  <img*/}
            {/*    src="https://i.loli.net/2021/11/15/k7xObUzhgY2Vjty.gif"*/}
            {/*    alt="subscribe"*/}
            {/*    style={{ height: 130, width: 130 }}*/}
            {/*  />*/}
            {/*</div>*/}
        </div>
    )
}
