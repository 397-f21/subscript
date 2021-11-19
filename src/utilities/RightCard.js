import React from "react";
import {pieChart} from "./PieChart";
import { useUserState } from "./firebase";
import "./css/RightCard.css"

const RightCardStatic = () => {
    return (
        <div>
            <pieChart />
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

            <div className="subscribeImg">
              <img
                src="https://i.loli.net/2021/11/15/k7xObUzhgY2Vjty.gif"
                alt="subscribe"
                style={{ height: 130, width: 130 }}
              />
            </div>
        </div>
    )
}
