import { motion } from "framer-motion";
import { classes } from "../../utils/styles";
import styles from "./Container.module.css";

/**
 * Container Component.
 * Wraps its children with a framer-motion motion.div element and provides
 * utility props for controlling direction, alignment, and justification.
 *
 * @param {Component} as - The HTML element type for the component.
 * @param {Boolean} show - Whether or not to show the component.
 * @param {String} className - The CSS class name for the component.
 * @param {Component} children - The child components of the Container.
 * @param {String} direction - The flexbox direction of the Container ('row' or 'column').
 * @param {String} align - The flexbox alignment of the Container.
 * @param {String} justify - The flexbox justification of the Container.
 * @param {Object} variants - The motion variants to be used for the Container.
 * @param {Number} z - The z-index of the Container.
 * @param {Object} rest - The remaining props to be passed to the component.
 * @returns {Component} The Container component.
 */

export const Container = ({
  as: Component = motion.div,
  show,
  className,
  children,
  direction = "row",
  align = "auto",
  justify = "auto",
  variants,
  z,
  background,
  ...rest
}) => {
  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={classes(styles.container, className)}
      data-direction={direction}
      data-justify={justify}
      data-align={align}
      data-z={z}
      style={{ backgroundColor: background && `${background}` }}
      {...rest}
    >
      {children}
    </Component>
  );
};
