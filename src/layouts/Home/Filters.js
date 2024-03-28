import { Button } from "@/components/Button";
import { Selector } from "@/components/Selector";
import { Text } from "@/components/Text";
import React, { useEffect, useState } from "react";
import styles from "./Filters.module.css";
import { Container } from "@/components/Container";
import { tasksData } from "../../../data/tasksData";

const Filters = ({ onPriorityChange, onStatusChange, onAssigneeChange }) => {
  const [selectedFilter, setSelectedFilter] = useState(["Priority"]);
  const [assigneeOptions, setAssigneeOptions] = useState([]);

  useEffect(() => {
    const uniqueAssignees = [
      ...new Set(tasksData.map((task) => task.assignee)),
    ];
    const options = [
      { label: "Select Assignee", value: "" },
      ...uniqueAssignees.map((assignee) => ({
        label: assignee,
        value: assignee,
      })),
    ];
    setAssigneeOptions(options);
  }, []);

  const priorityOptions = [
    { label: "Select Priority", value: "" },
    { label: "P0", value: "P0" },
    { label: "P1", value: "P1" },
    { label: "P2", value: "P2" },
  ];

  const statusOptions = [
    { label: "Select Status", value: "" },
    { label: "Pending", value: "Pending" },
    { label: "In Progress", value: "In Progress" },
    { label: "Completed", value: "Completed" },
    { label: "Deployed", value: "Deployed" },
    { label: "Deferred", value: "Deferred" },
  ];

  const filters = [
    { label: "Priority", value: "" },
    { label: "Status", value: "Status" },
    { label: "Assignee", value: "Assignee" },
  ];

  const handleFilterChange = (selectedOptions) => {
    setSelectedFilter(selectedOptions.map((option) => option.label));
  };

  const handlePriorityChange = (selectedOption) => {
    onPriorityChange(selectedOption.value);
  };

  const handleStatusChange = (selectedOption) => {
    onStatusChange(selectedOption.value);
  };

  const handleAssigneeChange = (selectedOption) => {
    onAssigneeChange(selectedOption.value);
  };

  return (
    <Container className={styles.section} direction={"column"}>
      <Container justify={"sb"}>
        <Container
          className={styles.filters}
          direction={"row"}
          align={"center"}
        >
          <Text size={"xxs"} weight={"bold"}>
            Filtered By:
          </Text>
          <Container className={styles.select}>
            <Selector
              options={filters}
              defaultValue={{
                value: "",
                label: "Priority",
              }}
              onChange={handleFilterChange}
              isMulti={true}
            />
          </Container>
          <Container className={styles.divider} />
          <Container className={styles.select}>{"DATE FILTER"}</Container>
        </Container>
        <Button secondary={true}>Add New Task</Button>
      </Container>
      <Container className={styles.filters} direction={"row"} align={"center"}>
        <Text size={"xxs"} weight={"bold"}>
          Sort By:
        </Text>
        <Container className={styles.select}>
          {selectedFilter?.includes("Priority") && (
            <Selector
              options={priorityOptions}
              defaultValue={{ label: "Priority", value: "" }}
              onChange={handlePriorityChange}
            />
          )}
          {selectedFilter.includes("Status") && (
            <Selector
              options={statusOptions}
              defaultValue={{ label: "Status", value: "" }}
              onChange={handleStatusChange}
            />
          )}
          {selectedFilter.includes("Assignee") && (
            <Selector
              options={assigneeOptions}
              defaultValue={{ label: "Select Assignee", value: "" }}
              onChange={handleAssigneeChange}
            />
          )}
          {selectedFilter.length === 0 && (
            <Selector defaultValue={{ label: "Select Filters", value: "" }} />
          )}
        </Container>
      </Container>
    </Container>
  );
};

export default Filters;
