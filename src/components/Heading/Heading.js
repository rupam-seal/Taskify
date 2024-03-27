import { motion } from "framer-motion";

import { classes } from "@/utils/styles";
import styles from "./Heading.module.css";

/**
 * Heading Component.
 * Renders a heading with the specified level, text, and other optional props.
 *
 * @param {string} children - The text to be displayed in the heading.
 * @param {number} level - The heading level (1-5, default is 1).
 * @param {string} as - The HTML element type for the heading (default is `h1`).
 * @param {string} align - The text alignment of the heading (default is 'auto').
 * @param {string} weight - The font weight of the heading (default is 'medium').
 * @param {string} className - The CSS class name for the component.
 * @param {Object} variants - The animation variants to be passed to the Framer Motion library.
 * @param {boolean} secondary - Whether the heading is a secondary heading or not (default is false).
 * @returns {Component} The Heading component.
 */

export const Heading = ({
  children,
  level = 1,
  as,
  align = "auto",
  weight = "medium",
  className,
  variants,
  secondary,
  button,
  ...rest
}) => {
  const clampedLevel = Math.min(Math.max(level, 0), 5);
  const Component = as || `h${Math.max(clampedLevel, 1)}`;
  return (
    <motion.div variants={variants}>
      <Component
        className={classes(styles.heading, className)}
        data-align={align}
        data-weight={weight}
        data-level={level}
        data-secondary={secondary}
        data-button={button}
        {...rest}
      >
        <span>{children}</span>
      </Component>
    </motion.div>
  );
};
