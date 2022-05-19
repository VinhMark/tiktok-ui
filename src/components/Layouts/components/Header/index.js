import { faCircleXmark, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import images from "~/assets/images";
import styles from "./Header.module.scss";
import { useState } from "react";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* header logo */}
        <div className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </div>
        {/* header search */}
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <div className={cx("search-label")}>Tài khoản</div>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
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
        </Tippy>
        {/* header action */}
        <div className={cx("actions")}>
          <Button text>Upload</Button>
          <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
