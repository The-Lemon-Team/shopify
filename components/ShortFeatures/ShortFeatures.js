import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import Image from "next/image";
import { TrophyFill } from "react-bootstrap-icons";

import styles from "./ShortFeatures.module.scss";

const iconsMap = {
  trophy: <TrophyFill color="#fff" size={50} />,
};

export const ShortFeatures = ({ features }) => {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <div className={styles.header}>Выбери лучший путь вперед</div>
        </Col>
      </Row>
      <Row cols={4} className={styles.mainWrapper}>
        {features.map(({ iconSrc, iconId, description, title }, i) => (
          <Col className={styles.item} key={i}>
            <div className={styles.iconWrapper}>
              {(iconId && iconsMap[iconId]) || <></>}
              {!iconId && iconSrc && (
                <Image src={iconSrc} alt={`Feature image - ${i}`} />
              )}
            </div>

            <div className={styles.titleWrapper}>
              <span className={styles.titleText}>{title}</span>
            </div>
            <span className={styles.descriptionText}>{description}</span>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

ShortFeatures.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      iconSrc: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

ShortFeatures.defaultProps = {
  features: [],
};
