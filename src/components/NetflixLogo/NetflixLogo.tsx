import "./NetflixLogo.css";

import NetflixLogoImg from "../../assets/images/netflix-logo.svg";
function NetflixLogo() {
  return (
    <div>
      <img
        src={NetflixLogoImg}
        alt="logo"
        title="netflix"
        className="netfli-logo"
      />
    </div>
  );
}

export default NetflixLogo;
