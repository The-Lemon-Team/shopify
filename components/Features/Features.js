import React from "react";
import { Container, Col, Row } from "reactstrap";
import Image from "next/image";

import { Title } from "../Title";

import { featuresShape } from "../helpers/propTypes";
import styles from "./Features.module.scss";

export const Features = ({ features }) => {
  return (
    <Container className={styles.main}>
      <Row className={styles.titleWrapper}>
        <Col lg={12}>
          <Title subTitle="Единая платформа со всеми функциями электронной коммерции и точек продаж, необходимыми для начала, ведения и развития вашего бизнеса.">
            С вами, куда бы вы ни пошли
          </Title>
        </Col>
      </Row>
      {features.map(
        ({ imageSrc, title, description, linkText, linkPath }, i) => (
          <Row key={i} className={styles.row}>
            <Col lg={6}>
              <Image
                alt={`Feature image - ${i}`}
                src={imageSrc}
                width={640}
                height={440}
              />
            </Col>
            <Col lg={5}>
              <div className={styles.itemTitleWrapper}>
                <h3 className={styles.itemTitle}>{title}</h3>
              </div>
              <div className={styles.itemDescriptionWrapper}>
                <span className={styles.itemDescription}>{description}</span>
              </div>
              <div>
                <a href={linkPath} className={styles.link}>
                  <div>{linkText} →</div>
                </a>
              </div>
            </Col>
          </Row>
        )
      )}
    </Container>
  );
};

Features.propTypes = {
  features: featuresShape,
};

Features.defaultProps = {
  features: [],
};
