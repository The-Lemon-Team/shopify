import React from "react";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import { Container, Col, Row } from "reactstrap";

import { partnersShape } from "../helpers/propTypes";
import styles from "./Partners.module.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const Partners = ({ partners }) => {
  return (
    <Container className={styles.main}>
      <Row>
        <Col>
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            arrows={false}
            showDots={true}
            itemClass={styles.item}
            transitionDuration={500}
          >
            {partners.map((item, index) => (
              <div key={index}>
                <Image
                  width={224}
                  height={155}
                  alt={`Partner - ${item.name}`}
                  className="react-multi-carousel-item--active"
                  src={item.image}
                />
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

Partners.propTypes = {
  partners: partnersShape,
};

Partners.defaultProps = {
  patners: [],
};
