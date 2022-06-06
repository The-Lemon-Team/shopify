import React from "react";

import { ContactForm } from "../ContactForm";

import styles from "./Contacts.module.scss";

export const Contact = () => {
  return (
    <div className={styles.main}>
      <ContactForm className={styles.form} />
    </div>
  );
};
