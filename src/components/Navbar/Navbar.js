import React, { useEffect } from "react";

import { navVariants, themeVariants } from "@/utils/motion";

import styles from "./Navbar.module.css";

import { Container } from "../Container";
import { motion } from "framer-motion";
import { useToggle } from "@/hooks/useToggle";
import { ToggleButton } from "../ToggleButton";
import { Logo } from "../Logo";

export const Navbar = () => {
  const lightTheme = "light";
  const darkTheme = "dark";

  const { status: theme, toggleStatus: toggleTheme } = useToggle();

  useEffect(() => {
    document.body.classList.add(lightTheme);
    theme
      ? document.body.classList.replace(lightTheme, darkTheme)
      : document.body.classList.replace(darkTheme, lightTheme);
  }, [theme]);

  return (
    <>
      <motion.header
        initial="hidden"
        animate="show"
        variants={navVariants}
        className={styles.header}
      >
        <Logo />

        <Container
          className={styles.rightContainer}
          align="center"
          justify="center"
        >
          <ToggleButton
            icon={theme ? "day" : "night"}
            toggleStatus={toggleTheme}
            visibility="all"
            variants={themeVariants}
          />
        </Container>
      </motion.header>
    </>
  );
};
