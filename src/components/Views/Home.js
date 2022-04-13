import React from "react";
import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <div className="row">
                <div className="col-sm-3">
                    ff
                </div>
                <div className="col-sm-7">
                    ddddd
                </div>
                <div className="col-sm-2">
                    <div className="d-flex justify-content-center">
                        <div className="btn-group d-flex flex-column">
                            <button className="btn btn-connect mt-5">CONNECT WALLET</button>
                            <button className="btn btn-minting mt-5">MINTING</button>
                            <button className="btn btn-play2E mt-5">PLAY 2E</button>
                            <button className="btn btn-about mt-5">ABOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}