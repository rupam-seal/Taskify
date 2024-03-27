import React from "react";
import styles from "./Home.module.css";
import { Meta } from "@/components/Meta";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { tasksData } from "../../../data/tasksData";

const title = "Home";
const description = "Task Tracker web app for a team in an organization.";

export const Home = () => {
  const renderCards = (status) => {
    const filteredTasks = tasksData?.filter((task) => task.status === status);
    return (
      <Card
        key={status}
        title={status}
        items={filteredTasks.map((task) => task)}
        status={status}
      />
    );
  };

  return (
    <div className={styles.section}>
      <Meta title={title} description={description} />
      <Container className={styles.cards}>
        {["Pending", "In Progress", "Completed", "Deployed", "Deferred"].map(
          (status) => renderCards(status)
        )}
      </Container>
    </div>
  );
};

export default Home;
