import React, { useEffect, useState } from "react";
import { Box,  } from "@chakra-ui/react";
import MaterialTable from "material-table";
import tableIcons from "../../utils/tableIcons";
import {
  createReminder,
  getItemReminders,
  deleteReminder,
} from "../../api/reminders";
import "../../style/material.css";

const Reminder = ({ uuid }) => {
  const [reminders, setReminders] = useState([]);

  const addReminder = async (reminder) => {
    let result = await createReminder(reminder);
    if (result.success) {
      setReminders([...reminders, result.newReminder]);
    }
  };
  const deleteReminderClick = async (UUID) => {
      console.log(UUID);
    let result = await deleteReminder(UUID);
    console.log(result);
    if (result.success) {
      let newReminders = reminders.filter((reminder) => reminder.UUID !== UUID);
      setReminders(newReminders);
    }
  };

  const tableColumns = [
    {
      title: "ReminderDate",
      field: "Date",
      width: "10%",
      type: "date",
    },
    {
      title: "Description",
      field: "Description",
      width: "80%",
    },
  ];

  const tableOptions = {
    pageSize: 10,
    pageSizeOptions: [10, 30, 50],
    // search: false
  };

  useEffect(() => {
    let result = {};
    async function fetchReminders() {
      result = await getItemReminders(uuid);
      setReminders(result.Reminders);
    }
    fetchReminders();
  }, []);

  return (
    <Box data-testid="reminder-cont" zIndex="2000">
      <MaterialTable
        title=""
        columns={tableColumns}
        data={reminders}
        options={tableOptions}
        icons={tableIcons}
        editable={{
          onRowUpdate: (newData, oldData) => deleteReminder("1"),
          onRowDelete: (data) => deleteReminderClick(data.UUID),
          onRowAdd: (data) => addReminder({ ...data, ItemUUID: uuid }),
        }}
        style={{ zIndex: 10000 }}
      />
    </Box>
  );
};

export default Reminder;
