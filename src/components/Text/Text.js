import React from "react";

import { motion } from "framer-motion";

import { classes } from "../../utils/styles";
import styles from "./Text.module.css";

/**
 * Text Component.
 * Renders text using the 'framer-motion' library for animations.
 *
 * @param {Component} as - The HTML element type for the component.
 * @param {String} children - The text content to render.
 * @param {String} size - The text size.
 * @param {String} weight - The font weight.
 * @param {String} align - The text alignment.
 * @param {Boolean} secondary - Whether the text should be styled as secondary text.
 * @param {String} className - The CSS class name for the component.
 * @param {String} width - The width of the text container.
 * @param {Object} variants - The animation variants for the motion component.
 * @returns {Component} The Text component.
 */

export const Text = ({
  as: Component = motion.span,
  children,
  size = "m",
  weight = "auto",
  align = "auto",
  secondary,
  accent,
  className,
  width = "auto",
  variants,
  ...rest
}) => {
  return (
    <Component
      variants={variants}
      viewport={{ once: true, amount: 0.25 }}
      className={classes(styles.text, className)}
      data-size={size}
      data-weight={weight}
      data-align={align}
      data-secondary={secondary}
      data-accent={accent}
      data-width={width}
      {...rest}
    >
      {children}
    </Component>
  );
};
