import React from "react";
import './index.css';
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate('/');
    }

    return (
        <div className="about">
            <div className="container">
                <p className="d-flex justify-content-start" id='about'>ABOUT</p>
                <div className="row mt-3">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-header">
                                <p className="d-flex justify-content-center" id="cardheader">Phase1</p>
                            </div>
                            <div className="card-body">
                                <div className="container mb-5">
                                    <p>Buy/mint your NFTs.</p>
                                    <p> + get 50 KISS ME</p>
                                    <p>Token.</p>
                                </div>
                                <div className="container mb-5">
                                    <p>NFT = Lotteryticket</p>
                                    <p>Lottery: Win100x</p>
                                    <p>1000$ after finished</p>
                                    <p>NFT sale</p>
                                </div>
                                <div className="container">
                                    <p>Charity: 30% of sale</p>
                                    <p>goes to charity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-header">
                                <p className="d-flex justify-content-center" id="cardheader">Phase2</p>
                            </div>
                            <div className="card-body">
                                <div className="container mb-5">
                                    <p>KISS ME TOKEN</p>
                                    <p>launch:</p>
                                </div>
                                <div className="container mb-5">
                                    <p>100.000$ Liquidity</p>
                                    <p>1.000.000.000 Total-</p>
                                    <p>supply</p>
                                </div>
                                <div className="container mb-5">
                                    <p>TOKENOMICS</p>
                                    <p>buy 8%</p>
                                    <p>sell 8%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-header">
                                <p className="d-flex justify-content-center" id="cardheader">Phase3</p>
                            </div>
                            <div className="card-body">
                                <div className="container mb-5">
                                    <p>KISS ME TOKEN</p>
                                    <p>gain</p>
                                </div>
                                <div className="container mb-5">
                                    <p>10% of the NFT</p>
                                    <p>resell-value goes</p>
                                    <p>into token liquidity</p>
                                </div>
                                <div className="container">
                                    <p>5% of the NFT</p>
                                    <p>resell-value goes</p>
                                    <p>to the NFT minter.</p>
                                    <p>maybe Play 2 Earn</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="text-right">
                    <button className="btn btn-back mt-2" onClick={back}>Back</button>
                </div>
            </div>
        </div>
    );
}

export default About;