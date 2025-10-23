import Right from "/assets/buttons/RightButton.webp";
import DRight from "/assets/buttons/RightButtonDisabled.webp";
import Left from "/assets/buttons/LeftButton.webp";
import DLeft from "/assets/buttons/LeftButtonDisabled.webp";

export function RightButton() {
  return <img src={Right} alt="Right Button" className="imgButton" />;
}

export function RightButtonDisabled() {
  return (
    <img
      src={DRight}
      alt="Right Button Disabled"
      className="imgButton cursor-not-allowed"
    />
  );
}
export function LeftButton() {
  return <img src={Left} alt="Left Button" className="imgButton" />;
}

export function LeftButtonDisabled() {
  return (
    <img
      src={DLeft}
      alt="Left Button Disabled"
      className="imgButton cursor-not-allowed"
    />
  );
}

export function Spinner() {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
          className="spinner"
        />
      </svg>
    </>
  );
}
