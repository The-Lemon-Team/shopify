import React from "react";
import { SSRProvider } from "react-bootstrap";

import { Contact } from "../Contact";
import { Examples } from "../Examples";
import { Features } from "../Features";
import { Footer } from "../Footer";
import { Gallery } from "../Gallery";
import { Header } from "../Header";
import { Partners } from "../Partners";

import { homePagePropTypes } from "../helpers/propTypes";
import styles from "./IndexPage.module.scss";

export const IndexPage = ({ shortFeatures, examples }) => {
  return (
    <SSRProvider>
      <Header />
      <div className={styles.main}>
        <Gallery />
      </div>
      <Examples shortFeatures={shortFeatures} examples={examples} />
      <Contact />
      <Partners />
      <Features />
      <Footer />
    </SSRProvider>
  );
};

IndexPage.propTypes = homePagePropTypes;
IndexPage.defaultProps = {
  examples: [],
  shortFeatures: [],
};
