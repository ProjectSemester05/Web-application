import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ItemContainer from "../../containers/items_container.jsx";
import * as itemAPI from "../../api/item.jsx";
import {
  getItems,
//   updateCatalogue,
//   createCatalogue,
} from "../mocks/item.js";

describe("catalogue container tests", () => {
  let mockGetItems;
  let mockDeleteItem;
  let mockUpdateItem;
  let mockCreateItem;

  let cardContainer;

  beforeEach(async () => {
    const { getByTestId } = render(<ItemContainer />);
    cardContainer = await waitFor(() => getByTestId("item-cont"));
  });

  beforeAll(() => {
    mockGetItems = jest
      .spyOn(itemAPI, "getItems")
      .mockImplementation(() => getItems);
    // mockDeleteItem = jest
    //   .spyOn(itemAPI, "deleteItem")
    //   .mockImplementation(() => ({ success: true }));
    // mockUpdateItem = jest
    //   .spyOn(itemAPI, "updateItem")
    //   .mockImplementation(() => ({ ...updateItem, success: true }));
    // mockCreateItem = jest
    //   .spyOn(itemAPI, "createItem")
    //   .mockImplementation(() => ({ ...createItem, success: true }));
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

//   test("catalogue container open edit catalogue", async () => {
//     const catalogueCard = screen.getByTestId(
//       `${getCatalogues.Catalogues[0].UUID}_edit`
//     );
//     fireEvent.click(catalogueCard);
//     expect(screen.getByText("Edit Catalogue")).toBeInTheDocument();
//     expect(screen.getByRole("textbox", { name: "Catalogue Name" }).value).toBe(
//       getCatalogues.Catalogues[0].CatalogueName
//     );
//   });

//   test("catalogue container open add catalogue", async () => {
//     const catalogueCard = screen.getByText("Create your own Catalogue!!!");
//     fireEvent.click(catalogueCard);
//     expect(screen.getByTestId("new-catalogue-form")).toBeInTheDocument();
//     expect(screen.getByRole("textbox", { name: "Catalogue Name" }).value).toBe(
//       ""
//     );
//   });

//   test("catalogue container delete catalogue", async () => {
//     const catalogueCard = screen.getByTestId(
//       `${getCatalogues.Catalogues[0].UUID}_edit`
//     );
//     fireEvent.click(catalogueCard);

//     const deleteBtn = screen.getByText("Delete");
//     fireEvent.click(deleteBtn);

//     await waitFor(() => screen.getByTestId("cat-cards"));
//     expect(mockDeleteCatalogue).toHaveBeenCalledTimes(1);
//     expect(catalogueCard).not.toBeInTheDocument();
//   });

//   test("catalogue container update catalogue", async () => {
//     const catalogueCard = screen.getByTestId(
//       `${getCatalogues.Catalogues[0].UUID}_edit`
//     );
//     fireEvent.click(catalogueCard);

//     const name = screen.getByRole("textbox", { name: "Catalogue Name" });
//     const submit = screen.getByText("Submit");

//     fireEvent.change(name, {
//       target: { value: `${getCatalogues.Catalogues[0].CatalogueName}_0` },
//     });
//     fireEvent.click(submit);

//     let cards = await waitFor(() => screen.getByTestId("cat-cards"));
//     expect(mockUpdateCatalogue).toHaveBeenCalledTimes(1);
//     expect(cards).toHaveTextContent(
//       `${getCatalogues.Catalogues[0].CatalogueName}_0`
//     );
//   });

//   test("catalogue container create catalogue", async () => {
//     const catalogueCard = screen.getByText("Create your own Catalogue!!!");
//     fireEvent.click(catalogueCard);

//     const name = screen.getByRole("textbox", { name: "Catalogue Name" });
//     fireEvent.change(name, {
//       target: { value: createCatalogue.newCatalogue.CatalogueName },
//     });
//     const submit = screen.getByText("Submit");

//     fireEvent.click(submit);

//     let cards = await waitFor(() => screen.getByTestId("cat-cards"));
//     expect(mockCreateCatalogue).toHaveBeenCalledTimes(1);
//     expect(cards).toHaveTextContent(createCatalogue.newCatalogue.CatalogueName);
//   });
});
