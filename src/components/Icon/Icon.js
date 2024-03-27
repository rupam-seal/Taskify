import styles from "./Icon.module.css";
import { classes } from "@/utils/styles";

/**
 * ICON COMPONENT
 * This component is used to render icons from various icon libraries
 * using the icons object.
 * The icons object maps icon names to their corresponding components.
 **/

/**
 * Default
 **/
import { GiAstronautHelmet } from "react-icons/gi";
import { SlOptions } from "react-icons/sl";
/**
 * Theme
 **/
import { TbSun } from "react-icons/tb";
import { TbMoonFilled } from "react-icons/tb";

export const icons = {
  /**
   * Default
   **/
  Default: GiAstronautHelmet,
  Options: SlOptions,
  day: TbSun,
  night: TbMoonFilled,
};

export const Icon = ({ icon, className, type, ...rest }) => {
  const IconComponent = icons[icon] ? icons[icon] : icons.Default;

  return (
    <IconComponent
      className={classes(styles.icon, className)}
      data-type={type}
      {...rest}
    />
  );
};
