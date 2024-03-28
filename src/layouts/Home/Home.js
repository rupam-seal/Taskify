import React, { useState } from "react";
import styles from "./Home.module.css";
import { Meta } from "@/components/Meta";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { tasksData } from "../../../data/tasksData";
import Filters from "./Filters";

const title = "Home";
const description = "Task Tracker web app for a team in an organization.";

export const Home = () => {
  const [filteredPriority, setFilteredPriority] = useState("");
  const [filteredStatus, setFilteredStatus] = useState("");
  const [filteredAssignee, setFilteredAssignee] = useState("");

  const handlePriorityChange = (priority) => {
    setFilteredPriority(priority);
  };

  const handleStatusChange = (status) => {
    setFilteredStatus(status);
  };

  const handleAssigneeChange = (assignee) => {
    setFilteredAssignee(assignee);
  };

  const renderCards = (status) => {
    let filteredTasks = tasksData.filter((task) => task.status === status);
    if (filteredPriority) {
      filteredTasks = filteredTasks.filter(
        (task) => task.priority === filteredPriority
      );
    }
    if (filteredStatus) {
      filteredTasks = filteredTasks.filter(
        (task) => task.status === filteredStatus
      );
    }
    if (filteredAssignee) {
      filteredTasks = filteredTasks.filter(
        (task) => task.assignee === filteredAssignee
      );
    }
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
      <div className={styles.container}>
        <Filters
          onPriorityChange={handlePriorityChange}
          onStatusChange={handleStatusChange}
          onAssigneeChange={handleAssigneeChange}
        />
        <Container className={styles.cards}>
          {["Pending", "In Progress", "Completed", "Deployed", "Deferred"].map(
            (status) => renderCards(status)
          )}
        </Container>
      </div>
    </div>
  );
};

export default Home;
