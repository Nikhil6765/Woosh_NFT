import React from "react";
import "./Index.scss";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {Test} from "./Home";
import { writeContract } from "@wagmi/core";
import { ethers } from "ethers";
import { useRef, useEffect } from "react";




export default function Index() {

  const ConnectWallet = () => {
    alert("Arre bhai, yeh Functionality banana baki hai");
  };
  return (
    <div className="index-page">
     <div className="container">
        {/* <ConnectedButton onClick={ConnectWallet} /> */}
        <Test/>

        {/*<a href="/home">Go to Home Page</a> */}


        {/* <img className="market" src="/blank.png">  </img> */}
      </div>
    </div>
  );
}
