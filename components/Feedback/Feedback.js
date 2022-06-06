import React from "react";
import { Container, Col, Row } from "reactstrap";
import Image from "next/image";

import { Title } from "../Title";

import { feedbackBunch } from "../helpers/propTypes";
import styles from "./Feedback.module.scss";

export const Feedback = ({ feedback }) => {
  return (
    <Container>
      <Row className={styles.headerWrapper}>
        <Col lg={12}>
          <Title subTitle="Единая платформа со всеми функциями электронной коммерции и точек продаж, необходимыми для начала, ведения и развития вашего бизнеса.">
            Отзывы наших партнеров
          </Title>
        </Col>
      </Row>
      <Row className={styles.row}>
        <div className={styles.imageContainer}>
          {feedback.map(({ image, companyName }, i) => (
            <div className={styles.imageWrapper} key={i}>
              <Image
                className={styles.image}
                alt={`Feedback of ${companyName}`}
                src={image}
                width={417}
                height={304}
              />
            </div>
          ))}
        </div>
        <div className={styles.textContainer}>
          {feedback.map(({ description, companyName }, i) => (
            <div key={i} className={styles.descriptionItem}>
              <div className={styles.descriptionWrapper}>
                <span className={styles.descriptionText}>{description}</span>
              </div>
              <div>
                <span className={styles.companyNameText}>{companyName}</span>
              </div>
            </div>
          ))}
        </div>
      </Row>
    </Container>
  );
};

Feedback.propTypes = {
  feedback: feedbackBunch,
};

Feedback.defaultProps = {
  feedback: [],
};
