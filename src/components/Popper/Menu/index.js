import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useState } from "react";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import Header from "./Header";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  // Click show sub menu
  const handleClickMenu = (isParent, item) => {
    if (isParent) {
      setHistory((prev) => [...prev, item.children]);
    } else {
      onChange({...item, type: current.title});
    }
  };
  // Click back menu from sub menu
  const handleBackMenu = () => {
    setHistory(history.slice(0, history.length - 1));
  };

  const renderItem = () => {
    return current.data.map((item, index) => {
      // !! syntax is convert to type boolean
      const isParent = !!item.children;
      return (
        <MenuItem
          data={item}
          key={index}
          onClick={() => handleClickMenu(isParent, item)}
        />
      );
    });
  };

  return (
    <Tippy
      visible
      content="Tooltip"
      interactive
      placement="bottom-end"
      render={(attrs) => {
        return (
          <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              {history.length > 1 && (
                <Header
                  title={current.title}
                  onBack={() => {
                    handleBackMenu();
                  }}
                />
              )}
              {renderItem()}
            </PopperWrapper>
          </div>
        );
      }}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
