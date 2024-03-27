import Link from "next/link";
import { Container } from "../Container";
import styles from "./Logo.module.css";
import { Text } from "../Text";

export const Logo = () => {
  return (
    <Container align="center" className={styles.logo}>
      <Link className={styles.text} href="/">
        <svg
          width="22"
          height="20"
          viewBox="0 0 59 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M58.3003 49.9999L40.8193 19.7068L36.7477 26.8186L45.9768 42.8881H12.8606L22.144 26.8186L18.018 19.7068L0.591309 49.9999H58.3003Z"
            fill="var(--colorTextTitle)"
          />
          <path
            d="M33.2189 6.51466L29.4187 0L25.6728 6.51466L22.144 12.6493L26.2156 19.7068L29.4187 14.1694L32.6217 19.7068L36.7477 12.6493L33.2189 6.51466Z"
            fill="#F36E30"
          />
        </svg>
      </Link>
      <Text weight={"bold"}>
        Taski<Text accent>fy</Text>
      </Text>
    </Container>
  );
};
