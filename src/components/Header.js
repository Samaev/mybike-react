/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { ReactComponent as Mywhitebike } from "../images/MyBiKEwhite.svg";

export const Header = () => {
  return (
    <div className="container">
      <div className="header__content">
        <div className="top-actions">
          <a to="#" className="header__linklogo">
            <Mywhitebike />
          </a>
          <div className="header__links">
            <a to="tel:+1 234 5555-55-55" className="header__call"></a>
            <a to="#menu" className="header__menu-opener"></a>
          </div>
        </div>
        <h1 className="header__title">Take the Streets</h1>
      </div>
    </div>
  );
};
