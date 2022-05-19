import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "~/components/AccountItem/AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/38e56944ea70a0e497bf3c118daa6846.jpeg?x-expires=1653120000&x-signature=8zBl4s2ViXRk3%2FZE3T6muP5%2B78U%3D"
        alt=""
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          Nguyen Van A
          <FontAwesomeIcon icon={faCheckCircle}  className={cx('verify-badge')}/>
        </h4>
        <p className={cx('item-desc')}>That khong the tin duoc</p>
      </div>
    </div>
  );
}

export default AccountItem;
