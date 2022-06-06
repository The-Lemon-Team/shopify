import React from "react";
import { Container, Col, Row } from "reactstrap";

import { ContactForm } from "../ContactForm";

import styles from "./Contacts.module.scss";

export const Contact = () => {
  return (
    <div className={styles.main}>
      <Container>
        <Row className={styles.wrapper}>
          <Col lg={5}>
            <span className={styles.title}>
              Оставьте свои данные для получения бесплатной консультации
            </span>
          </Col>
          <Col lg={4}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
