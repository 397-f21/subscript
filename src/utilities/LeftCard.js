import React from "react";
import {useUserState} from "./firebase";
import "./css/LeftCard.css"

const Descriptions = {
    description: "This is the description"
}

const LeftCardLogin = () => {
    return (
        <div>
            <p>null</p>
        </div>
    )
}

const LeftCardStatic = () => {
    return (
        <div>
            <div className="descriptions">
                <div>
                    {Descriptions.description}
                </div>
                <div className="subscribeImg">
                    <img src="https://i.loli.net/2021/11/15/k7xObUzhgY2Vjty.gif"
                         alt="subscribe"
                         style={{height:130, width:130}}
                    />
                </div>
            </div>

            <div className="demoList">
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
            </div>
        </div>
    )
}

export const LeftCard = () => {
    const [user] = useUserState();

    return (
        <div className="leftcard">
            {user ? <LeftCardLogin /> : <LeftCardStatic />}
        </div>
    )
}