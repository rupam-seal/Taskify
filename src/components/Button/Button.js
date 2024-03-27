import { motion } from "framer-motion";
import styles from "./Button.module.css";
import { classes } from "@/utils/styles";
import { Icon } from "../Icon";

/**

 * Button Component.
 * Renders a button with optional icon and animation using the 'framer-motion' library.
 * @param {String} className - The CSS class name for the component.
 * @param {Object} variants - The animation variants to be used with 'framer-motion'.
 * @param {Component} as - The HTML element type for the component, defaults to 'Link' from 'next/link'.
 * @param {Boolean} secondary - A boolean indicating whether the button should have a secondary style.
 * @param {String} icon - The name of the icon to be used with the 'Icon' component.
 * @param {String} weight - The weight of the button, either 'regular', 'medium' or 'bold'.
 * @param {String} size - The size of the button, either 'small', 'medium' or 'large'.
 * @param {String} align - The text alignment of the button, either 'left', 'center', or 'right'.
 * @param {String} href - The URL to link to if using 'Link' from 'next/link'.
 * @param {Boolean} disabled - A boolean indicating whether the button should be disabled.
 * @param {Node} children - The content to be rendered inside the button.
 * @param {Object} animation - The animation settings to be used with 'CSS-Animation'.
 * @param {Object} rest - The remaining props to be passed to the component.
 * @returns {Component} The Button component.
*/

export const Button = ({
  className,
  variants,
  as: Component = motion.div,
  secondary,
  icon,
  weight = "medium",
  size = "medium",
  align,
  href,
  disabled,
  children,
  animation,
  ...rest
}) => {
  return (
    <motion.div variants={variants}>
      <Component
        className={classes(styles.button, className)}
        data-secondary={secondary}
        data-weight={weight}
        data-size={size}
        data-align={align}
        href={href}
        aria-disabled={disabled}
        data-animation={animation}
        {...rest}
      >
        {children}
        {icon ? <Icon className={styles.icon} icon={icon} /> : ""}
      </Component>
    </motion.div>
  );
};
