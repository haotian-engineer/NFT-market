import React, { useState } from "react";
import { ReactDOM } from "react";

import './index.css';

const Minting = () => {

    const [ count, setCount ] = useState(0);
    
    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    }

    return (

        <div className="modal" id="myModal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">KISS ME NFT MINTING</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-sm-4">
                                <img src="img/lips.png" />
                            </div>
                            <div className="col-sm-4">
                                <p><h4>{ count * 3 / 100 }BNB</h4></p>
                                <div>
                                    <button className="btn btn-dec" onClick={decrease}>-</button>
                                    <span id="count">{count}</span>
                                    <button className="btn btn-inc" onClick={increase}>+</button>
                                </div>
                                <button className="btn btn-mint">MINT</button>
                            </div>
                            <div className="col-sm-4">
                                <img src="img/lips.png" />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Minting;