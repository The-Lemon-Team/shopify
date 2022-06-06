import React from "react";
import { Container, Col, Row } from "reactstrap";

import { Button } from "../Button";
import { VideoPreview } from "../VideoPreview";

import styles from "./Gallery.module.scss";

export const Gallery = () => {
  return (
    <Container>
      <Row className={styles.row}>
        <Col lg={6}>
          <Col lg={11} className={styles.textWrapper}>
            <span className={styles.text}>
              Создайте бизнес <br /> в интернете, независимо <br /> от того, чем
              вы занимаетесь
            </span>
          </Col>
          <div>
            <Button variant="secondary" className={styles.button}>
              Попробовать
            </Button>
            <Button className={styles.button}>Смотреть видео</Button>
          </div>
        </Col>
        <Col lg={6}>
          <VideoPreview />
        </Col>
      </Row>
    </Container>
  );
};
