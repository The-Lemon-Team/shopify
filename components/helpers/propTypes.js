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

export const homePagePropTypes = {
  examples: examplesShape,
  shortFeatures: shortFeaturesShape,
};
