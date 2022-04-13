import React from "react";
import './Home.css';

import ConnectWalletButton from "./ConnectWalletButton";
import Minting from "./Minting";
import Play2E from "./Play2E";
import About from "./About";

export default function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        ff
                    </div>
                    <div className="col-sm-6">
                        ddddd
                    </div>
                    <div className="col-sm-3">  
                        <div className="btn-group d-flex flex-column">
                            <button className="btn btn-connect mt-5">CONNECT WALLET</button>
                            <button className="btn btn-connect mt-5">MINTING</button>
                            <button className="btn btn-connect mt-5">PLAY 2E</button>
                            <button className="btn btn-connect mt-5">ABOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}