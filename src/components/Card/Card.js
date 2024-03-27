import styles from "./Card.module.css";
import { Container } from "../Container";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { Button } from "../Button";

export const Card = ({ title = "", items, status }) => {
  const childCard = items?.map((item) => {
    return (
      <Container key={item} className={styles.child}>
        <Container className={styles.itemContent}>
          <Container className={styles.itemHeader}>
            <Text size={"xs"} weight={"medium"} secondary={true}>
              {item?.title}
            </Text>
            <Container className={styles.priorityContainer}>
              <Text
                size={"xxs"}
                weight={"medium"}
                secondary={true}
                className={styles.priority}
              >
                {item?.priority}
              </Text>
            </Container>
          </Container>
          <Container className={styles.devider} />
          <Text size={"xxs"} secondary={true}>
            {item?.description}
          </Text>
          <Container className={styles.itemHeader}>
            <Text size={"xxs"} weight={"medium"} secondary={true}>
              @{item?.assignee}
            </Text>
            <Container className={styles.priorityContainer}>
              <Icon
                type={"button"}
                icon={"Options"}
                className={styles.priority}
              />
            </Container>
          </Container>
          <Button primary={true}>Asignee</Button>
        </Container>
      </Container>
    );
  });

  const taskCount = items?.length;
  const lowercaseStatus = status.replace(/\s+/g, "").toLowerCase();

  return (
    <div className={`${styles[lowercaseStatus]}`}>
      <Container className={`${styles.card}`}>
        <Container className={styles.header}>
          <Container className={styles.content}>
            <Heading level={7} weight={"bold"}>
              {title}
            </Heading>
            <Text className={styles.count}>{taskCount}</Text>
          </Container>
          <Container className={styles.options}>
            <Icon icon={"Options"} />
          </Container>
        </Container>
        {childCard}
      </Container>
    </div>
  );
};
