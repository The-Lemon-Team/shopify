import React from "react";
import Image from "next/image";
import { Container, Row, Nav, NavLink, NavItem, NavbarBrand } from "reactstrap";
import classNames from "classnames";

import { Button } from "../Button";
import imageSrc from "./shopify-logo.png";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.main}>
      <Container>
        <Row>
          <div className={styles.navBar}>
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
              <Nav>
                <NavItem>
                  <NavLink className={styles.link} href="#">
                    Спикеры
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={styles.link} href="#">
                    Программы
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={styles.link} href="#">
                    Фотогалерея
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={styles.link} href="#">
                    Организаторы
                  </NavLink>
                </NavItem>
              </Nav>
            </div>

            <Button className={styles.regBtn}>Попробовать</Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};
