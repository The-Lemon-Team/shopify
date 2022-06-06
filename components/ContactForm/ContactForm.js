import React, { useCallback } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { Formik, Field } from "formik";

import { Button } from "../Button";

import styles from "./ContactForm.module.scss";

export const ContactForm = () => {
  const handleSubmit = useCallback(() => {}, []);

  return (
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
                      <Input type="checkbox" {...field} checked={field.value} />
                      <Label check className={styles.label}>
                        Я согласен на обработку своих персональных данных
                      </Label>
                    </FormGroup>
                  );
                }}
              </Field>
            </FormGroup>
            <Button block type="submit" disabled={!values.privacyAccepted}>
              Отправить
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
