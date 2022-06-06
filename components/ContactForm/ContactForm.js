import React, { useCallback } from "react";
import { Container, Col, Row, Form, FormGroup, Input, Label } from "reactstrap";
import { Formik, Field } from "formik";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Button } from "../Button";

import styles from "./ContactForm.module.scss";

export const ContactForm = ({ className, variant }) => {
  const handleSubmit = useCallback(() => {}, []);

  return (
    <Container>
      <Row
        className={classNames(styles.wrapper, className, {
          [styles.vertical]: variant === "vertical",
        })}
        md={variant === "vertical" ? 12 : 10}
      >
        <Col
          lg={variant === "vertical" ? 12 : 5}
          className={styles.titleWrapper}
        >
          <span className={styles.title}>
            Оставьте свои данные для получения бесплатной консультации
          </span>
        </Col>
        <Col lg={variant === "vertical" ? 12 : 5}>
          <Formik
            onSubmit={handleSubmit}
            initialValues={{ name: "", email: "", privacyAccepted: true }}
          >
            {({ handleSubmit, values }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Field name="name">
                      {({ field }) => (
                        <Input
                          id="name"
                          placeholder="Имя"
                          type="text"
                          className={styles.field}
                          {...field}
                        />
                      )}
                    </Field>

                    <Field name="email">
                      {({ field }) => {
                        return (
                          <Input
                            id="email"
                            placeholder="Email"
                            type="email"
                            className={styles.field}
                            {...field}
                          />
                        );
                      }}
                    </Field>

                    <Field name="privacyAccepted">
                      {({ field }) => {
                        return (
                          <FormGroup check>
                            <Input
                              type="checkbox"
                              {...field}
                              checked={field.value}
                            />
                            <Label check className={styles.label}>
                              Я согласен на обработку своих персональных данных
                            </Label>
                          </FormGroup>
                        );
                      }}
                    </Field>
                  </FormGroup>
                  <Button
                    block
                    type="submit"
                    disabled={!values.privacyAccepted}
                  >
                    Отправить
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["horizontal", "vertical"]),
};
