import React from "react";
import Image from "next/image";
import {
  Container,
  Row,
  NavLink,
  Navbar,
  NavItem,
  NavbarBrand,
} from "react-bootstrap";
import classNames from "classnames";

import { Button } from "../Button";
import imageSrc from "./shopify-logo.png";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.main}>
      <Container>
        <Row lg={12} md={12} xs={12}>
          <Navbar className={styles.navBar}>
            <NavbarBrand
              className={classNames("mr-3", styles.navBrandContainer)}
            >
              <Image
                alt="Logo image"
                className={styles.logoImage}
                src={imageSrc}
              />
            </NavbarBrand>

            <div className={styles.menu}>
              <NavItem>
                <NavLink className={styles.link}>Спикеры</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={styles.link}>Программы</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={styles.link}>Фотогалерея</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={styles.link}>Организаторы</NavLink>
              </NavItem>
            </div>

            <Button className={styles.regBtn}>Попробовать</Button>
          </Navbar>
        </Row>
      </Container>
    </div>
  );
};
