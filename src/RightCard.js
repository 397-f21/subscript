import React from "react";
import {signInWithGoogle} from "./utilities/firebase";
import {signOut} from "./utilities/firebase";
import {useUserState} from "./utilities/firebase";
import "./RightCard.css"

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

export const RightCard = () => {
    const [user] = useUserState();

    return (
        <div className="rightcard">
            <div>
                { user ? <SignOutButton /> : <SignInButton /> }
            </div>
        </div>
    )
}