import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Minting from "../Minting";

import './Home.css';

const Home = () => {
    const [isModal, setIsModal] = useState(false);

    const navigate = useNavigate();

    const about = () => {
        navigate('/about');
    }

    const Toggle = () => setIsModal(!isModal);

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
                    <div className="col-md-3 col-sm-3 col-4 main-container">
                        <div className="d-flex justify-content-center">
                            <div className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="img/lips.png" className="d-block" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="img/images.jpg" className="d-block" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="img/lips.png" className="d-block" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-5 col-4">
                        <p className="buy-container">
                            <button className="btn btn-buy">BUY</button>
                            <div className="nft-text">0.03 BNB per NFT</div>
                        </p>
                    </div>
                    <div className="col-md-2 col-sm-4 col-4">
                        <div className="d-flex justify-content-center">
                            <div className="btn-group">
                                <button className="btn btn-connect">CONNECT WALLET</button>
                                <button className="btn btn-minting mt-5"data-bs-toggle="modal" data-bs-target="#myModal">MINTING</button>
                                
                                <Minting />
                                <button className="btn btn-play2E mt-5">PLAY 2E</button>
                                <button className="btn btn-about mt-5" onClick={() => about()}>ABOUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;