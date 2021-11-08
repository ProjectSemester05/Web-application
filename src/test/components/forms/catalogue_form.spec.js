import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CatalogueForm from "../../../components/forms/catalogue_form.jsx";
import * as catalogueAPI from "../../../api/catalogue.jsx";
import {
  updateCatalogue,
  createCatalogue,
} from "../../mocks/catalogue.js";

describe("catalogue form tests", () => {
  let mockDeleteCatalogue;
  let mockUpdateCatalogue;
  let mockCreateCatalogue;


  beforeAll(() => {
    mockDeleteCatalogue = jest
      .spyOn(catalogueAPI, "deleteCatalogue")
      .mockResolvedValue({ success: true });
    mockUpdateCatalogue = jest
      .spyOn(catalogueAPI, "updateCatalogue")
      .mockResolvedValue({ ...updateCatalogue, success: true });
    mockCreateCatalogue = jest
      .spyOn(catalogueAPI, "createCatalogue")
      .mockResolvedValue({ ...createCatalogue, success: true });
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("add new catalogue render test", () => {
    render(<CatalogueForm add={true} />);
    const name = screen.getByRole("textbox", { name: "Catalogue Name" });
    expect(name.value).toBe("");
  });

  test("update catalogue render test", () => {
    render(
      <CatalogueForm
        add={false}
        catalogue={{ CatalogueName: "Garage Items" }}
      />
    );
    const name = screen.getByRole("textbox", { name: "Catalogue Name" });
    expect(name.value).toBe("Garage Items");
  });

  test("add new catalogue", async () => {
    let func = jest.fn();
    let onClose = jest.fn();
    let { getByText } = render(
      <CatalogueForm add={true} func={func} onClose={onClose} />
    );

    const name = screen.getByRole("textbox", { name: "Catalogue Name" });
    const submit = screen.getByRole("button", { id: "catalogue_form_submit" });

    fireEvent.change(name, { target: { value: "Kitchen Items" } });
    fireEvent.click(submit);

    await waitFor(() => screen.getByTestId("addcatalogue-form"));
    expect(mockCreateCatalogue).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(getByText("Success")).toBeTruthy();
  });
  test("edit catalogue", async () => {
    let func = jest.fn();
    let onClose = jest.fn();
    let { getAllByText } = render(
      <CatalogueForm
        catalogue={createCatalogue.newCatalogue}
        add={false}
        func={func}
        onClose={onClose}
      />
    );

    const name = screen.getByRole("textbox", { name: "Catalogue Name" });
    const submit = screen.getByText("Submit");

    fireEvent.change(name, { target: { value: "Kitchen Items" } });
    fireEvent.click(submit);

    await waitFor(() => screen.getByTestId("addcatalogue-form"));
    expect(mockUpdateCatalogue).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(getAllByText("Success")).toHaveLength(2);
  });

  test("delete catalogue", async () => {
    let func = jest.fn();
    let onClose = jest.fn();
    let { getByText } = render(
      <CatalogueForm
        catalogue={createCatalogue.newCatalogue}
        add={false}
        deleteFunc={func}
        onClose={onClose}
      />
    );
    const submit = screen.getByRole('button',{name:"Delete"});
    fireEvent.click(submit);

    await waitFor(() => screen.getByTestId("addcatalogue-form"));
    expect(getByText("Delete Confirmation")).toBeTruthy();
  });
});

describe("catalogue form error tests", () => {
  let mockDeleteCatalogue;
  let mockUpdateCatalogue;
  let mockCreateCatalogue;


  beforeAll(() => {
    mockDeleteCatalogue = jest
      .spyOn(catalogueAPI, "deleteCatalogue")
      .mockResolvedValue({ success: false });
    mockUpdateCatalogue = jest
      .spyOn(catalogueAPI, "updateCatalogue")
      .mockResolvedValue({ success: false });
    mockCreateCatalogue = jest
      .spyOn(catalogueAPI, "createCatalogue")
      .mockResolvedValue({  success: false });
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  
  test("add new catalogue error", async () => {
    let func = jest.fn();
    let onClose = jest.fn();
    let { getByText } = render(
      <CatalogueForm add={true} func={func} onClose={onClose} />
    );

    const name = screen.getByRole("textbox", { name: "Catalogue Name" });
    const submit = screen.getByRole("button", { name: "Submit" });

    fireEvent.change(name, { target: { value: "Kitchen Items" } });
    fireEvent.click(submit);

    await waitFor(() => screen.getByTestId("addcatalogue-form"));
    expect(mockCreateCatalogue).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(0);
    expect(getByText("Error")).toBeTruthy();
  });

  test("edit catalogue error", async () => {
    let func = jest.fn();
    let onClose = jest.fn();
    let { getAllByText } = render(
      <CatalogueForm
        catalogue={createCatalogue.newCatalogue}
        add={false}
        func={func}
        onClose={onClose}
      />
    );

    const name = screen.getByRole("textbox", { name: "Catalogue Name" });
    const submit = screen.getByText("Submit");

    fireEvent.change(name, { target: { value: "Kitchen Items" } });
    fireEvent.click(submit);

    await waitFor(() => screen.getByTestId("addcatalogue-form"));
    expect(mockUpdateCatalogue).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(0);
    expect(getAllByText("Error")).toBeTruthy();
  });

  test("delete catalogue error", async () => {
    let func = jest.fn();
    let onClose = jest.fn();
    let { getByText } = render(
      <CatalogueForm
        catalogue={createCatalogue.newCatalogue}
        add={false}
        deleteFunc={func}
        onClose={onClose}
      />
    );
    const submit = screen.getByRole('button',{name:"Delete"});
    fireEvent.click(submit);

    await waitFor(() => screen.getByTestId("addcatalogue-form"));
    expect(getByText("Delete Confirmation")).toBeTruthy();

  });
});
