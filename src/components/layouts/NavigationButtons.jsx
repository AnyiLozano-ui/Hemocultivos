import { Link } from "react-router-dom";
import HomeButton from "/assets/buttons/Home.webp";
import LeftButton from "/assets/buttons/LeftButton.webp";
import RightButton from "/assets/buttons/RightDisabled.webp";

export const NavigationButtons = () => {
  function handleImageError(e) {
    e.target.style.display = "none";
  }

  return (
    <>
      <div className="space-x-7 flex flex-row mm items-center justify-center lg:justify-start lg:ml-[200px] lg:-mt-24 mt-2 ">
        <Link
          to="/"
          className="conButton border border-[#003D78] bg-white rounded-full "
        >
          <img
            src={HomeButton}
            alt="Home button"
            onError={handleImageError}
            className="imgButton"
          />
        </Link>

        <Link to="/welcome" className="conButton border border-[#003D78] bg-white rounded-full ">
          <img
            src={LeftButton}
            alt="Left button"
            onError={handleImageError}
            className="imgButton"
          />
        </Link>

        <Link className="conButton border border-[#003D78] bg-white rounded-full cursor-default">
          <img
            src={RightButton}
            alt="Right button"
            onError={handleImageError}
            className="imgButton "
          />
        </Link>
      </div>
    </>
  );
};
