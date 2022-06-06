import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Col, Row } from "react-bootstrap";

import styles from "./Title.module.scss";

export const Title = ({
  align,
  children,
  element,
  subTitle,
  subTitleContent,
  subTitleElement,
  variant,
}) => {
  return (
    <div
      className={classNames(
        {
          [styles.alignCenter]: align === "center",
          [styles.alignLeft]: align === "left",
          [styles.primaryBlack]: variant === "primary",
          [styles.secondaryColor]: variant === "secondary",
        },
        styles.main
      )}
    >
      <div className={styles.mainTitleWrapper}>
        {React.createElement(
          element,
          { className: styles.mainTitle },
          children
        )}
      </div>
      {subTitle && (
        <Row className={styles.subTitleWrapper}>
          <Col lg={8}>
            {React.createElement(
              subTitleElement,
              { className: styles.subTitle },
              subTitle
            )}
          </Col>
          {subTitleContent && (
            <Col lg={4} className={styles.subTitleContent}>
              {subTitleContent}
            </Col>
          )}
        </Row>
      )}
    </div>
  );
};

Title.propTypes = {
  align: PropTypes.oneOf(["left", "center"]),
  element: PropTypes.string,
  subTitleContent: PropTypes.element,
  subTitle: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  subTitleElement: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

Title.defaultProps = {
  align: "center",
  element: "h2",
  subTitleElement: "h4",
  variant: "primary",
};
