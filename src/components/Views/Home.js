import React from "react";
import { useNavigate } from "react-router-dom";

import './Home.css';

export default function Home() {
    const navigate = useNavigate();

    const about = () => {
        navigate('/about');
    }
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <div>
                        <span className="d-flex nft-text1">KISS ME NFTs + Token</span>
                        <span className="d-flex nft-text2">SALE, LOTTERY & CHARITY</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 main-container">
                        <div className="d-flex justify-content-center">
                            <div className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="img/lips.png" className="d-block" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="img/images.jpg"  className="d-block" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="img/lips.png"  className="d-block" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <p className="buy-container">
                            <button className="btn btn-buy">BUY</button>
                            <div className="nft-text">0.03 BNB per NFT</div>
                        </p>
                    </div>
                    <div className="col-sm-2">
                        <div className="d-flex justify-content-center">
                            <div className="btn-group d-flex flex-column">
                                <button className="btn btn-connect">CONNECT WALLET</button>
                                <button className="btn btn-minting mt-5">MINTING</button>
                                <button className="btn btn-play2E mt-5">PLAY 2E</button>
                                <button className="btn btn-about mt-5" onClick={about}>ABOUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}