import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ItemContainer from "../../containers/items_container.jsx";
import * as itemAPI from "../../api/item.jsx";
import * as reminderAPI from "../../api/reminders";
import { getItems, updateItem, createItem } from "../mocks/item.js";
import { createReminder, getReminders } from "../mocks/reminder.js";

describe("catalogue container item tests", () => {
  let mockGetItems;
  let mockDeleteItem;
  let mockUpdateItem;
  let mockCreateItem;
  
  let cardContainer;

  beforeEach(async () => {
    let incrementspy = jest.fn();
    const { getByTestId } = render(<ItemContainer uuid="1" increment={incrementspy} />);
    cardContainer = await waitFor(() => getByTestId("item-cont"));
  });

  beforeAll(() => {
    mockGetItems = jest
      .spyOn(itemAPI, "getItems")
      .mockImplementation(() => getItems);
    mockDeleteItem = jest
      .spyOn(itemAPI, "deleteItem")
      .mockImplementation(() => ({ success: true }));
    mockUpdateItem = jest
      .spyOn(itemAPI, "updateItem")
      .mockImplementation(() => ({ ...updateItem, success: true }));
    mockCreateItem = jest
      .spyOn(itemAPI, "createItem")
      .mockImplementation(() => ({ ...createItem, success: true }));
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("item container render test", async () => {
    expect(mockGetItems).toHaveBeenCalledTimes(1);
    getItems.Items.forEach((item) => {
      expect(cardContainer).toHaveTextContent(item.ItemName);
      expect(cardContainer).toHaveTextContent(item.StoredLocation);
      expect(cardContainer).toHaveTextContent(item.Description);
    });
  });

  test("item container open edit item", async () => {
    const editBtn = screen.getAllByRole("button", { name: "Edit" })[0];
    fireEvent.click(editBtn);

    expect(screen.getByText("Edit Item")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Item name" }).value).toBe(
      getItems.Items[0].ItemName
    );
  });

  test("item container open add item", async () => {
    const itemCard = screen.getByText("Add New Item");
    fireEvent.click(itemCard);
    expect(screen.getByText("Item name")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Item name" }).value).toBe("");
  });

  test("item container delete item", async () => {
    const deleteBtn = screen.getAllByTitle("Delete")[0];
    fireEvent.click(deleteBtn);

    const confirmBtn = screen.getAllByRole("button", { name: "Save" });
    fireEvent.click(confirmBtn[0]);

    await waitFor(() => screen.getByTestId("item-cont"));
    expect(mockDeleteItem).toHaveBeenCalledTimes(1);
    expect(cardContainer).not.toHaveTextContent(getItems.Items[0].ItemName);
  });

  test("item container update item", async () => {
    const editBtn = screen.getAllByRole("button", { name: "Edit" })[0];
    fireEvent.click(editBtn);

    const name = screen.getByRole("textbox", { name: "Item name" });
    const submit = screen.getByText("Submit");

    fireEvent.change(name, {
      target: { value: `${getItems.Items[0].ItemName}_0` },
    });
    fireEvent.click(submit);

    let cards = await waitFor(() => screen.getByTestId("item-cont"));
    expect(mockUpdateItem).toHaveBeenCalledTimes(1);
    expect(cards).toHaveTextContent(`${getItems.Items[0].ItemName}_0`);
  });

  test("item container create items", async () => {
    const itemCard = screen.getByText("Add New Item");
    fireEvent.click(itemCard);

    const name = screen.getByRole("textbox", { name: "Item name" });
    fireEvent.change(name, {
      target: { value: createItem.newItem.ItemName },
    });
    const submit = screen.getByText("Submit");

    fireEvent.click(submit);

    let cards = await waitFor(() => screen.getByTestId("item-cont"));
    expect(mockCreateItem).toHaveBeenCalledTimes(1);
    expect(cards).toHaveTextContent(createItem.newItem.ItemName);
  });

});




describe("catalogue container reminder tests", () => {
  let mockGetItems;
  let mockGetReminders;
  let mockDeleteReminder;
  let mockUpdateReminder;
  let mockCreateReminder;

  let reminderContainer;

  beforeEach(async () => {
    let incrementspy = jest.fn();
    const { getByTestId } = render(<ItemContainer increment={incrementspy} uuid="1"/>);
    await waitFor(() => getByTestId("item-cont"));

    const reminderBtn = screen.getAllByRole("button", { name: "Reminders" })[0];
    fireEvent.click(reminderBtn);

    reminderContainer = await waitFor(() => screen.getByTestId("reminder-cont"));    
  });

  beforeAll(() => {
    jest.setTimeout(30000);
    mockGetItems = jest
      .spyOn(itemAPI, "getItems")
      .mockImplementation(() => getItems);
    mockGetReminders = jest
      .spyOn(reminderAPI, "getItemReminders")
      .mockImplementation(() => getReminders);
    mockDeleteReminder = jest
      .spyOn(reminderAPI, "deleteReminder")
      .mockImplementation(() => ({ success: true }));
    // mockUpdateReminder = jest
    //   .spyOn(reminderAPI, "updateReminder")
    //   .mockImplementation(() => ({ ...updateReminder, success: true }));
    mockCreateReminder = jest
      .spyOn(reminderAPI, "createReminder")
      .mockImplementation(() => ({ ...createReminder, success: true }));
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  // test("Reminder container reminder render", async () => {
  //   expect(mockGetReminders).toHaveBeenCalledTimes(1);
  //   expect(reminderContainer).toHaveTextContent(`${getReminders.Reminders[0].Date}`);
  //   expect(reminderContainer).toHaveTextContent(`${getReminders.Reminders[0].Description}`);
  // });

  test("Reminder container delete Reminder", async () => {
    const deleteBtn = screen.getAllByTitle("Delete")[getItems.Items.length];
    fireEvent.click(deleteBtn);

    const confirmBtn = screen.getAllByRole("button", { name: "Save" });
    fireEvent.click(confirmBtn[0]);

    await waitFor(() => screen.getByTestId("reminder-cont"));
    expect(mockDeleteReminder).toHaveBeenCalledTimes(1);
    // expect(reminderContainer).not.toHaveTextContent(getReminders.Reminders[0].Date);
  });

  // test("Reminder container update Reminder", async () => {
  //   const editBtn = screen.getAllByRole("button", { name: "Edit" })[getItems.Items.length];
  //   fireEvent.click(editBtn);

  //   const name = screen.getByRole("textbox", { name: "ReminderDate: press space to edit" });
  //   fireEvent.change(name, {
  //     target: { value: `25-10-2021` },
  //   });
  //   const confirmBtn = screen.getAllByRole("button", { name: "Save" });
  //   fireEvent.click(confirmBtn[0]);

  //   let cards = await waitFor(() => screen.getByTestId("reminder-cont"));
  //   expect(mockUpdateReminder).toHaveBeenCalledTimes(1);
  //   expect(cards).toHaveTextContent(`25-10-2021`);
  // });

  test("Reminder container create Reminders", async () => {
    const addBtn = screen.getAllByRole("button", { name: "Add" })[0];
    fireEvent.click(addBtn);

    const name = screen.getByRole("textbox", { name: "ReminderDate: press space to edit" });
    const description = screen.getByRole("textbox", { name: "Description" });
    fireEvent.change(name, {
      target: { value: createReminder.newReminder.Date },
    });
    fireEvent.change(description, {
      target: { value: createReminder.newReminder.Description },
    });
    const confirmBtn = screen.getAllByRole("button", { name: "Save" });
    fireEvent.click(confirmBtn[0]);


    let cards = await waitFor(() => screen.getByTestId("reminder-cont"));
    expect(mockCreateReminder).toHaveBeenCalledTimes(1);
    // expect(cards).toHaveTextContent(createReminder.newReminder.Date);
    // expect(cards).toHaveTextContent(createReminder.newReminder.Description);
  });

  
});
