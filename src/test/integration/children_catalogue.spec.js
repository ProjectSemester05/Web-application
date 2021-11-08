import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChildrenCatalogueContainer from "../../containers/children_catalogue.jsx";
import * as catalogueAPI from "../../api/catalogue.jsx";
import {
  getChildrenCatalogues,
  updateCatalogue,
  createCatalogue,
} from "../mocks/catalogue.js";

describe("catalogue container tests", () => {
  let mockGetCatalogues;
  let mockDeleteCatalogue;
  let mockUpdateCatalogue;
  let mockCreateCatalogue;

  let cardContainer;

  beforeEach(async () => {
    let incrementspy = jest.fn();
    const { getByTestId } = render(<ChildrenCatalogueContainer increment={incrementspy} />);
    await waitFor(() => expect(getByTestId('child-cat-cont')).toBeInTheDocument(),{
      timeout: 10000
    });
    cardContainer = getByTestId("child-cat-cont")
  });

  beforeAll(() => {
    mockGetCatalogues = jest
      .spyOn(catalogueAPI, "getChildrenCatalogues")
      .mockImplementation(() => getChildrenCatalogues);
    mockDeleteCatalogue = jest
      .spyOn(catalogueAPI, "deleteCatalogue")
      .mockImplementation(() => ({ success: true }));
    mockUpdateCatalogue = jest
      .spyOn(catalogueAPI, "updateCatalogue")
      .mockImplementation(() => ({ ...updateCatalogue, success: true }));
    mockCreateCatalogue = jest
      .spyOn(catalogueAPI, "createCatalogue")
      .mockImplementation(() => ({ ...createCatalogue, success: true }));
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("children catalogue container render test", async () => {
    expect(mockGetCatalogues).toHaveBeenCalledTimes(1);
    getChildrenCatalogues.Catalogues.forEach((catalogue) => {
      expect(cardContainer).toHaveTextContent(catalogue.CatalogueName);
    });
  });

  test("catalogue container open edit catalogue", async () => {
    const catalogueCard = screen.getByTestId(
      `${getChildrenCatalogues.Catalogues[0].UUID}_edit`
    );
    fireEvent.click(catalogueCard);
    expect(screen.getByText("Edit Catalogue")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Catalogue Name" }).value).toBe(
        getChildrenCatalogues.Catalogues[0].CatalogueName
    );
  });

  test("catalogue container open add catalogue", async () => {
    const catalogueCard = screen.getByText("Create your own Catalogue!!!");
    fireEvent.click(catalogueCard);
    expect(screen.getByTestId("new-catalogue-form")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Catalogue Name" }).value).toBe(
      ""
    );
  });

  test("catalogue container delete catalogue", async () => {
    const catalogueCard = screen.getByTestId(
      `${getChildrenCatalogues.Catalogues[0].UUID}_edit`
    );
    fireEvent.click(catalogueCard);

    const deleteBtn = screen.getByText("Delete");
    fireEvent.click(deleteBtn);

    await waitFor(() => screen.getByTestId("child-cat-cont"));
    expect(screen.getByText("Delete Confirmation")).toBeTruthy();

  });

  test("catalogue container update catalogue", async () => {
    const catalogueCard = screen.getByTestId(
      `${getChildrenCatalogues.Catalogues[0].UUID}_edit`
    );
    fireEvent.click(catalogueCard);

    const name = screen.getByRole("textbox", { name: "Catalogue Name" });
    const submit = screen.getByText("Submit");

    fireEvent.change(name, {
      target: { value: `${getChildrenCatalogues.Catalogues[0].CatalogueName}_0` },
    });
    fireEvent.click(submit);

    let cards = await waitFor(() => screen.getByTestId("child-cat-cont"));
    expect(mockUpdateCatalogue).toHaveBeenCalledTimes(1);
    expect(cards).toHaveTextContent(
      `${getChildrenCatalogues.Catalogues[0].CatalogueName}_0`
    );
  });

  test("catalogue container create catalogue", async () => {
    const catalogueCard = screen.getByText("Create your own Catalogue!!!");
    fireEvent.click(catalogueCard);

    const name = screen.getByRole("textbox", { name: "Catalogue Name" });
    fireEvent.change(name, {
      target: { value: createCatalogue.newCatalogue.CatalogueName },
    });
    const submit = screen.getByText("Submit");

    fireEvent.click(submit);

    let cards = await waitFor(() => screen.getByTestId("child-cat-cont"));
    expect(mockCreateCatalogue).toHaveBeenCalledTimes(1);
    expect(cards).toHaveTextContent(createCatalogue.newCatalogue.CatalogueName);
  });
});
