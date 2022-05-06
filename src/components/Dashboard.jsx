import React from "react";
import TasksCard from "./cards/TasksCard";
import AlertsCard from "./cards/AlertsCard";

export default function Dashboard(props) {
  const { authState, setAuth } = props;
  const cardDefaultInfo = {
    title: "Upcoming Tasks",
    warning: false,
    items: [
      "Call Fran @ 10am",
      "Prepare important customer report",
      "1:1 meeting with Josh",
      "Draft strategy for Q3",
    ],
  };
  return (
    <div>
      <h2 className="mt-3">Dashboard</h2>
      <div className="row mt-5">
        <div className="col-12">
          <TasksCard />
          <AlertsCard setAuth={setAuth} authState={authState} />
        </div>
      </div>
    </div>
  );
}
