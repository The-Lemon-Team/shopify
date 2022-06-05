import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const PRIMARY_VARIANT = "primary";
const SECONDARY_VARIANT = "secondary";
const customVariants = [PRIMARY_VARIANT, SECONDARY_VARIANT];

export const Button = ({ className, variant, ...props }) => {
  return (
    <BootstrapButton
      className={classNames(className, styles.btn, {
        [styles.btnPrimary]: variant === PRIMARY_VARIANT,
        [styles.btnSecondary]: variant === SECONDARY_VARIANT,
      })}
      variant={variant}
      {...props}
    />
  );
};

Button.propTypes = {
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(customVariants),
    PropTypes.string,
  ]),
};

Button.defaultProps = {
  variant: PRIMARY_VARIANT,
};
