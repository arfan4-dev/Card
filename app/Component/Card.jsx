import React, { useState, useEffect } from "react";
import "./style.css";
import Image from "next/image";
import BardBottom from "./BardBottom";
import ProgressBar from "./ProgressBar"; // Import ProgressBar component
import Head from 'next/head';

const Card = () => {
  const [date, setDate] = useState({});

  function timeRunner() {
    const currentDate = new Date();
    const day = Math.floor(currentDate / (1000 * 60 * 60 * 24)) % 30;
    const hour = Math.floor(currentDate / (1000 * 60 * 60)) % 24;
    const minute = Math.floor(currentDate / (1000 * 60)) % 60;
    const second = Math.floor(currentDate / 1000) % 60;

    setDate({ day, hour, minute, second });
  }

  useEffect(() => {
    setInterval(() => {
      timeRunner();
    }, 100);
  }, []);

  return (
    <div className="cardWrapper"> 
    <Head>
    {/* Add the viewport meta tag here */} 
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
      <div id="cardContainer">
        <div className="card">
          <Image src="/image/Rectangle.png" alt="Building" width={600} height={600} id='imgcard'/>
          <div className="cardBody">
            <div className="space-between">
              <div>
                <div className="date">
                  <div className="div">
                  <p>{date.day}</p>
                  <p>{`DAYS`}</p>
                  </div>
                  <div className="div">
                  <p>{date.hour}</p>
                  <p>{`HOURS`}</p>
                  </div>
                  <div className="div">
                  <p>{date.minute}</p>
                  <p>{`MINUTES`}</p>
                  </div>
                  <div className="div">
                  <p>{date.second}</p>
                  <p>{`SECOND`}</p>
                  </div>
                  
                 
                  
                  
                </div>
              </div>
              <div id="progressBar">
                <div id="progressBar-body">
                  <ProgressBar/>
                  <p className='p1'>£50,000,000 GBP</p>
                  <p style={{ textAlign: "center" }} className='p1'>
                    Sotheby <br /> INTERNATIONAL REALTY
                  </p>
                </div>
                <div className="percent">
                  <div className="per">
                    <p className="p2">23%</p>
                  </div>
                  <div className="lines">
                    <p className="p2" ></p>
                    <p className="p2" ></p>
                    <p className="p2" ></p>
                    <p className="p2"></p>
                    <p className="p2"></p>
                    <p className="p2"></p>
                  </div>
                </div>
                <p id="text">SHELTON STREET COVENT GARDEN LONDON WC2H UNITED KINGDOM</p>
                <div id="ZM">
                  <p>#ZM7861234567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BardBottom />
      </div>
    </div>
  );
};

export default Card;
