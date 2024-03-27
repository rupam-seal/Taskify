import { AnimatePresence, motion } from 'framer-motion';
import { Container } from '../Container';
import { Icon } from '../Icon';
import { Text } from '../Text';

import styles from './ToggleButton.module.css';

/**
 * ToggleButton Component.
 * Renders a button that toggles its status when clicked.
 *
 * @param {String} icon - The name of the icon to display on the button.
 * @param {Function} toggleStatus - The function to call when the button is clicked.
 * @param {String} visibility - The visibility of the button.
 * @param {Object} variants - The animation variants for the motion component.
 * @returns {Component} The ToggleButton component.
 */

export const ToggleButton = ({ icon, toggleStatus, visibility, variants }) => {
  return (
    <Container
      className={styles.container}
      onClick={toggleStatus}
      data-visibility={visibility}
    >
      <motion.div
        variants={variants}
        key={icon}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Icon icon={icon} className={styles.icon} />
      </motion.div>
    </Container>
  );
};
