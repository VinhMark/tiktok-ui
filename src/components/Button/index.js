import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "~/components/Button/Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  disable = false,
  rounded = false,
  className,
  small = false,
  medium = false,
  large = false,
  children,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const prop = {
    onClick,
    ...passProps,
  };

  // Remove even listener when button disable
  if (disable) {
    Object.keys(prop).forEach(key => {
      if(key.startsWith('on') && typeof prop[key] === 'function') {
        delete prop[key]
      }
    })
  }

  if (to) {
    prop.to = to;
    Comp = Link;
  } else if (href) {
    prop.href = href;
    Comp = "a";
  }
  // set value to key using [classname]=classname
  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    text,
    disable,
    rounded,
    small,
    medium,
    large,
  });
  return (
    <Comp className={classes} {...prop}>
      {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('right-icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
