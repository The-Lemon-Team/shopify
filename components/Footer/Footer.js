import React from "react";
import { Container, Col, Row } from "reactstrap";
import Image from "next/image";

import { Title } from "../Title";
import { ContactForm } from "../ContactForm";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.main}>
      <Container>
        <Row className={styles.headerWrapper}>
          <Col>
            <Title
              variant="secondary"
              subTitle="
Попробуйте Shopify бесплатно и изучите все инструменты и услуги, необходимые для запуска, ведения и развития вашего бизнеса."
            >
              Начните свое деловое путешествие с Shopify
            </Title>
          </Col>
        </Row>
        <Row className={styles.contactForm}>
          <Col lg={6} className={styles.imageWrapper}>
            <Image
              width={641}
              height={536}
              alt="Footer contact placeholder image"
              src="/footer-contact.jpg"
            />
          </Col>
          <Col lg={6}>
            <div className={styles.form}>
              <ContactForm variant="vertical" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
