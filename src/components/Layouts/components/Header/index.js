import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* header logo */}
        <div className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </div>
        {/* header search */}
        <div className={cx("search")}>
          <input
            type="text"
            placeholder="Search account and video"
            spellCheck="false"
          />
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          {/* <button className={cx("loading")}>
              <FontAwesomeIcon icon={faSpinner} />
            </button> */}
          <button className={cx("search-btn")}>
            <img src={images.icon.search} alt="" />
          </button>
        </div>
        {/* header action */}
        <div>Action</div>
      </div>
    </header>
  );
}

export default Header;
