import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddItemForm from "../../../components/forms/additem.jsx";
import * as itemAPI from "../../../api/item.jsx";
import { updateItem, createItem } from "../../mocks/item.js";

describe("item form tests", () => {
  let mockUpdateItem;
  let mockCreateItem;

  beforeAll(() => {
    mockUpdateItem = jest
      .spyOn(itemAPI, "updateItem")
      .mockResolvedValue({ ...updateItem, success: true });
    mockCreateItem = jest
      .spyOn(itemAPI, "createItem")
      .mockResolvedValue({ ...createItem, success: true });
  });

  test("add new item render test", () => {
    render(<AddItemForm add={true} />);
    const name = screen.getByRole("textbox", { name: "Item name" });
    expect(name.value).toBe("");
  });

  test("update catalogue render test", () => {
    render(<AddItemForm add={false} item={{ ItemName: "Garage Items" }} />);
    const name = screen.getByRole("textbox", { name: "Item name" });
    expect(name.value).toBe("Garage Items");
  });

  test("add new item", async () => {
    let func = jest.fn();
    let onClose = jest.fn();
   
    let {getByText} = render(<AddItemForm add={true} func={func} onClose={onClose} />);
    const name = screen.getByRole("textbox", { name: "Item name" });
    const submit = screen.getByRole("button", { name: "Submit" });
    fireEvent.change(name, { target: { value: "Kitchen Items" } });
    fireEvent.click(submit);
    await waitFor(() => screen.getByTestId("additem-form"));

    expect(mockCreateItem).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(getByText("Success")).toBeTruthy()
  });
  
  test("edit item", async () => {
    let func = jest.fn();
    let onClose = jest.fn();
   
    let {getAllByText} = render(<AddItemForm add={false} item={updateItem.newItem} func={func} onClose={onClose} />);
    const name = screen.getByRole("textbox", { name: "Item name" });
    const submit = screen.getByRole("button", { name: "Submit" });
    fireEvent.change(name, { target: { value: `${updateItem.newItem.ItemName}_0` } });
    
    fireEvent.click(submit);
    await waitFor(() => screen.getByTestId("additem-form"));

    expect(mockUpdateItem).toHaveBeenCalledTimes(1);
    expect(getAllByText("Success")).toHaveLength(2);
  });
  
});

describe("item form error tests", () => {
  let mockUpdateItem;
  let mockCreateItem;

  beforeAll(() => {
    mockUpdateItem = jest
      .spyOn(itemAPI, "updateItem")
      .mockResolvedValue({ success: false });
    mockCreateItem = jest
      .spyOn(itemAPI, "createItem")
      .mockResolvedValue({ success: false });
  });

  
  test("add new item error", async () => {
    let func = jest.fn();
    let onClose = jest.fn();
   
    let {getByText} = render(<AddItemForm add={true} func={func} onClose={onClose} />);
    const name = screen.getByRole("textbox", { name: "Item name" });
    const submit = screen.getByRole("button", { name: "Submit" });
    fireEvent.change(name, { target: { value: "Kitchen Items" } });
    fireEvent.click(submit);
    await waitFor(() => screen.getByTestId("additem-form"));

    expect(mockCreateItem).toHaveBeenCalledTimes(2);
    expect(onClose).toHaveBeenCalledTimes(0);
    expect(getByText("Error")).toBeTruthy()
  });
  
  test("edit item error", async () => {
    let func = jest.fn();
    let onClose = jest.fn();
   
    let {getAllByText} = render(<AddItemForm add={false} item={updateItem.newItem} func={func} onClose={onClose} />);
    const name = screen.getByRole("textbox", { name: "Item name" });
    const submit = screen.getByRole("button", { name: "Submit" });
    fireEvent.change(name, { target: { value: `${updateItem.newItem.ItemName}_0` } });
    
    fireEvent.click(submit);
    await waitFor(() => screen.getByTestId("additem-form"));

    expect(mockUpdateItem).toHaveBeenCalledTimes(2);
    expect(onClose).toHaveBeenCalledTimes(0);
    expect(getAllByText("Error")).toHaveLength(2);
  });
  
});
