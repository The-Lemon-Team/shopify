import React from "react";

import { Contact } from "../Contact";
import { Examples } from "../Examples";
import { Features } from "../Features";
import { Feedback } from "../Feedback";
import { Footer } from "../Footer";
import { Gallery } from "../Gallery";
import { Header } from "../Header";
import { Partners } from "../Partners";

import { homePagePropTypes } from "../helpers/propTypes";
import styles from "./IndexPage.module.scss";

export const IndexPage = ({
  examples,
  features,
  feedback,
  partners,
  shortFeatures,
}) => {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <Gallery />
      </div>
      <Examples shortFeatures={shortFeatures} examples={examples} />
      <Features features={features} />
      <Contact />
      <div className={styles.partnersWrapper}>
        <Partners partners={partners} />
      </div>
      <div className={styles.feedbackWrapper}>
        <Feedback feedback={feedback} />
      </div>
      <Footer />
    </div>
  );
};

IndexPage.propTypes = homePagePropTypes;
IndexPage.defaultProps = {
  examples: [],
  feedback: [],
  features: [],
  patners: [],
  shortFeatures: [],
};
