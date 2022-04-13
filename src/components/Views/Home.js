import React from "react";

import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-sm-10">
                        <div>
                            <p className="d-flex nft-text1">KISS ME NFTs + Token</p>
                            <p className="d-flex nft-text2">SALE, LOTTERY & CHARITY</p>
                        </div>
                        <div className="container" style={{marginTop: "25%"}}>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="d-flex justify-content-start">
                                        <div className="carousel slide" data-bs-ride="carousel">
                                            <div className="carousel-inner" style={{width:"100%"}}>
                                                <div className="carousel-item active">
                                                    <img src="img/lips.png" className="d-block" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="img/lips.png"  className="d-block" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="img/lips.png"  className="d-block" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <p className="buy">
                                        <button className="btn btn-buy">BUY</button>
                                        <div className="nft-text">0.03 BNB per NFT</div>
                                    </p>
                                </div>


                            </div>
                        </div>

                    </div>
                    <div className="col-sm-2">
                        <div className="d-flex justify-content-end">
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
        </div>
    );
}