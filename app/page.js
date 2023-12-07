"use client";
import Image from "next/image";
import "./page.css";
import { useState } from "react";

const popupContentArr = [
  {
    src: "/ParkingMapPin.svg",
    x: 52,
    y: 68,
    width: 2,
    popupContent: {
      redirectLink:
        "https://maps.google.com/?cid=8475385377586310731&entry=gps",
      popupImageLink: "/parking.jpeg",
      name: "Sinhgad Parking",
    },
  },
  {
    src: "/KalyanGate.svg",
    x: 31,
    y: 22,
    width: 6,
    popupContent: {
      redirectLink: "https://maps.app.goo.gl/bkA29beFczJ3mhSd6",
      popupImageLink: "/KalyanDarwaja.jpeg",
      name: "Kalyan Gate",
    },
  },
  {
    src: "/TanajiSamadhi.svg",
    x: 66,
    y: 23,
    width: 6,
    popupContent: {
      redirectLink: "https://maps.app.goo.gl/Df4AKaaEb6SXM6G96",
      popupImageLink: "/tanaji.jpeg",
      name: "Tanaji Samadhi",
    },
  },
  {
    src: "/PuneGate.svg",
    x: 62,
    y: 58,
    width: 6,
    popupContent: {
      redirectLink: "https://g.co/kgs/PjBNV7",
      popupImageLink: "/puneGate.jpeg",
      name: "Pune Gate",
    },
  },
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between main-container font-sans">
      <div className="background-image-container">
        <img
          src="/background.svg"
          alt="Vercel Logo"
          className="background-image"
          priority
        />
        {popupContentArr.map((popupData) => (
          <Popup {...popupData} />
        ))}
        <img
          className="display-image shake-x-animation"
          style={{ bottom: "23%", width: "25%", right: "5%" }}
          src="/visiting-hours.svg"
        ></img>
        <img
          className="display-image shake-x-animation"
          style={{ top: "30%", width: "33%", left: "5%" }}
          src="/horse.svg"
        ></img>
      </div>
    </main>
  );
}

const Popup = ({ x, y, src, width, popupContent }) => {
  const [showPopupContent, setShowPopupContent] = useState(false);
  const hidePopupContent = () => setShowPopupContent(false);
  return (
    <>
      <div
        onClick={() => setShowPopupContent(true)}
        className="popup-container scale-up-animation"
        style={{
          top: `${y}%`,
          left: `${x}%`,
          width: `${width}%`,
        }}
      >
        <img
          src={src}
          className="popup-image"
          onClick={() => setShowPopupContent((prev) => !prev)}
        ></img>
      </div>
      {showPopupContent && (
        <PopupContent hidePopupContent={hidePopupContent} {...popupContent} />
      )}
    </>
  );
};

const PopupContent = ({
  hidePopupContent,
  redirectLink,
  popupImageLink,
  name,
}) => {
  return (
    <div onClick={hidePopupContent} className="popup-content-container">
      <div onClick={(e) => e.stopPropagation()} className="popup-content">
        <p className="text-2xl  font-bold ">{name}</p>
        <img src={popupImageLink}></img>
        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          <a href={redirectLink} target="_blank">
            Get Directions
          </a>
        </button>
      </div>
    </div>
  );
};
