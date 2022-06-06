import React from "react";

import { Contact } from "../Contact";
import { Examples } from "../Examples";
import { Features } from "../Features";
import { Footer } from "../Footer";
import { Gallery } from "../Gallery";
import { Header } from "../Header";
import { Partners } from "../Partners";

import { homePagePropTypes } from "../helpers/propTypes";
import styles from "./IndexPage.module.scss";

export const IndexPage = ({ shortFeatures, examples, features, partners }) => {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <Gallery />
      </div>
      <Examples shortFeatures={shortFeatures} examples={examples} />
      <Features features={features} />
      <Contact />
      <Partners partners={partners} />
      <Footer />
    </div>
  );
};

IndexPage.propTypes = homePagePropTypes;
IndexPage.defaultProps = {
  examples: [],
  features: [],
  patners: [],
  shortFeatures: [],
};
