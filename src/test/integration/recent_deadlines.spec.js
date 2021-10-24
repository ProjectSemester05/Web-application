// import React from "react";
// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import RecentDeadlines from "../../containers/recent_deadlines.jsx";
// import * as remindersAPI from "../../api/reminders.jsx";
// import {
//   getReminders,
// } from "../mocks/reminder";

// describe("catalogue container tests", () => {
//   let mockGetCatalogues;

//   let cardContainer;

//   beforeEach(async () => {
//     const { getByTestId } = render(<CatalogueContainer />);
//     cardContainer = await waitFor(() => getByTestId("cat-cards"));
//   });

//   beforeAll(() => {
//     mockGetCatalogues = jest
//       .spyOn(catalogueAPI, "getCatalogues")
//       .mockImplementation(() => getCatalogues);
    
//   });

//   afterAll(() => {
//     jest.clearAllMocks();
//   });

//   test("recent deadline container render test", async () => {
//     expect(mockGetReminders).toHaveBeenCalledTimes(1);
//     getRecentReminders.Reminder.forEach((reminder) => {
//       expect(cardContainer).toHaveTextContent(catalogue.CatalogueName);
//     });
//   });
// });
