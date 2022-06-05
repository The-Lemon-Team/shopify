import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";

import { Button } from "../Button";
import { ShortFeatures } from "../ShortFeatures";
import { Title } from "../Title";

import { examplesShape, shortFeaturesShape } from "../helpers/propTypes";
import styles from "./Examples.module.scss";

export const Examples = ({ examples, shortFeatures }) => {
  return (
    <div className={styles.main}>
      <Container className={styles.examplesContainer}>
        <Row>
          <Col lg={12}>
            <div className={styles.titleWrapper}>
              <Title
                variant="secondary"
                align="left"
                subTitleContent={
                  <Button variant="link" className={styles.subTitleBtn}>
                    Посмотреть все шаблоны →
                  </Button>
                }
                subTitle="
      Создайте веб-сайт электронной коммерции с мощными инструментами, которые помогут вам находить клиентов, стимулировать продажи и управлять повседневными делами."
              >
                Сделайте свой бизнес онлайн
              </Title>
            </div>
            <Row cols={5} className={styles.examplesWrapper}>
              {examples.map((example, i) => (
                <Col key={i}>
                  <div className={styles.imageWrapper}>
                    {example.image && (
                      <Image
                        width={248}
                        height={435}
                        src={example.image}
                        className={styles.image}
                        alt={`Example - ${i} preview`}
                      />
                    )}
                  </div>
                </Col>
              ))}
            </Row>
            <Row cols={5} className={styles.examplesWrapper}>
              {examples.map((example, i) => (
                <Col className={styles.exampleItem} key={i}>
                  <a href="#">
                    <div className={styles.title}>{example.title}</div>
                    <div className={styles.author}>{example.author}</div>
                  </a>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <ShortFeatures features={shortFeatures} />
    </div>
  );
};

Examples.propTypes = {
  examples: examplesShape,
  shortFeatures: shortFeaturesShape,
};

Examples.defaultProps = {
  examples: [],
  shortFeatures: [],
};
