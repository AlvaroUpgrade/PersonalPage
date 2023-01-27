import { Link } from "react-scroll";
import "./NavMenu.scss";

const NavMenu = () => {
  return (
    <div className="data">
      <div className="options">
        <ul>
          <li>
            <Link to="about" spy={true} smooth={true} duration={1500}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} duration={1500}>
              Technologies
            </Link>
          </li>
          <li>
            <Link
              to="education"
              spy={true}
              smooth={true}
              // offset={50}
              duration={1500}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              // offset={50}
              duration={1500}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="habilities&languages"
              spy={true}
              smooth={true}
              // offset={50}
              duration={1500}
            >
              Habilities & Languages
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
