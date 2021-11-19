import React from "react";
import {signInWithGoogle} from "./firebase";
import {signOut} from "./firebase";
import {useUserState} from "./firebase";
import "./css/RightCard.css"

const SignOutButton = () => (
    <button className="btn btn-secondary btn-sm"
            onClick={() => signOut()}>
        Sign Out
    </button>
);

const SignInButton = () => (
    <button className="btn btn-secondary btn-sm"
            onClick={() => signInWithGoogle()}>
        Sign In
    </button>
);

const RightCardStatic = () => {
    return (
        <div>
            <SignInButton />
        </div>
    )
}

const RightCardLogin = () => {
    return (
        <div>
            <SignOutButton />
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
