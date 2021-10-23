import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import VerificationForm from "../../../components/forms/verification";
import * as amplify from "../../../utils/amplifyConf.jsx";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("verification form tests", () => {
  let mockConfirmSignUp;
  let mockResendConfirmationCode;
  const initialState = {
    token: null,
    userID: null,
    email: null,
    firstName: null,
    lastName: null,
    provider: false,
  };
  const mockStore = configureStore();
  let store;

  beforeAll(() => {
    mockConfirmSignUp = jest
      .spyOn(amplify, "confirmSignUp")
      .mockResolvedValue({ success: true });
    mockResendConfirmationCode = jest
      .spyOn(amplify, "resendConfirmationCode")
      .mockResolvedValue({ success: true });
  });

  beforeEach(() => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <VerificationForm email="poorna2152@gmail.com" password="12345" />
      </Provider>
    );
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
  test("render test verification Form", () => {
    const code = screen.getByTestId("verification-code");
    expect(code).toHaveTextContent("");
  });

  test("verification form validate", async () => {
    const code = screen.getByTestId("verification-code");
    const submit = screen.getByText("Validate");
    fireEvent.change(code, { target: { value: "12345" } });
    fireEvent.click(submit);

    await waitFor(() => screen.getByTestId("verification-form"));

    expect(mockConfirmSignUp).toHaveBeenCalled();
  });

  test("verification form resend", async () => {
    const submit = screen.getByText("Resend Code");
    fireEvent.click(submit);
    expect(mockResendConfirmationCode).toHaveBeenCalled();
  });
});

describe("verification form error tests", () => {
  let mockConfirmSignUp;
  let mockResendConfirmationCode;
  const initialState = {
    token: null,
    userID: null,
    email: null,
    firstName: null,
    lastName: null,
    provider: false,
  };
  const mockStore = configureStore();
  let store;

  beforeAll(() => {
    mockConfirmSignUp = jest
      .spyOn(amplify, "confirmSignUp")
      .mockResolvedValue({ success: false });
    mockResendConfirmationCode = jest
      .spyOn(amplify, "resendConfirmationCode")
      .mockResolvedValue({ success: false });
  });

  beforeEach(() => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <VerificationForm email="poorna2152@gmail.com" password="12345" />
      </Provider>
    );
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("verification form validate error", async () => {
    const code = screen.getByTestId("verification-code");
    const submit = screen.getByText("Validate");
    fireEvent.change(code, { target: { value: "12345" } });
    fireEvent.click(submit);

    await waitFor(() => screen.getByTestId("verification-form"));

    expect(mockConfirmSignUp).toHaveBeenCalled();
    expect(screen.getByText("Invalid code")).toBeTruthy();
  });

  test("verification form resend error", async () => {
    const submit = screen.getByText("Resend Code");
    fireEvent.click(submit);
    expect(mockResendConfirmationCode).toHaveBeenCalled();
    expect(screen.getByText("Invalid code")).toBeTruthy();
  });
});
