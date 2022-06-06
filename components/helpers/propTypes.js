import PropTypes from "prop-types";

export const shortFeatureShape = PropTypes.shape({
  description: PropTypes.string,
  iconId: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
});
export const shortFeaturesShape = PropTypes.arrayOf(shortFeatureShape);

export const exampleShape = PropTypes.shape({
  title: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
});
export const examplesShape = PropTypes.arrayOf(exampleShape);

export const featureShape = PropTypes.shape({
  linkText: PropTypes.string,
  linkPath: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
});
export const featuresShape = PropTypes.arrayOf(featureShape);

export const partnerShape = PropTypes.shape({
  image: PropTypes.string,
  name: PropTypes.string,
});
export const partnersShape = PropTypes.arrayOf(partnerShape);

export const feedbackShape = PropTypes.shape({
  image: PropTypes.string,
  description: PropTypes.string,
  companyName: PropTypes.string,
});
export const feedbackBunch = PropTypes.arrayOf(feedbackShape);

export const homePagePropTypes = {
  examples: examplesShape,
  feedback: feedbackBunch,
  features: featuresShape,
  partners: partnersShape,
  shortFeatures: shortFeaturesShape,
};
