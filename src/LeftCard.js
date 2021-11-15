import React from "react";
import "./LeftCard.css"

const Descriptions = {
    description: "This is the description"
}

export const LeftCard = () => {
    return (
        <div className="leftcard">
            <div className="descriptions">
                {Descriptions.description}
            </div>
            <div className="demoList">
                <div>
                    <spanc className="column1">
                        <img
                            src="https://i.loli.net/2021/11/15/LZAwp2WV38J9zhu.png"
                            alt="Netflix"
                            style={{width:30, height:30}}/>
                    </spanc>
                    <span className="column2">Netfix</span>
                    <span className="column3">$17.99</span>
                </div>
                <div>
                    <span className="column1">
                        <img
                            src="https://i.loli.net/2021/11/15/d8Ls5IxvwW7POug.png"
                            alt="Adobe"
                            style={{width:30, height:30}}/>
                    </span>
                    <span className="column2">Adobe</span>
                    <span className="column3">$19.99</span>
                </div>
                <div>
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
            <div>
                <img src="https://i.loli.net/2021/11/15/k7xObUzhgY2Vjty.gif"
                     alt="subscribe"
                     style={{height:200, width:200}}
                />
            </div>
        </div>
    )
}