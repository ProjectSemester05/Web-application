import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ForgottenPasswordForm from "../../../components/forms/forgotPassword";
import * as amplify from "../../../utils/amplifyConf.jsx";

describe("forgot password form tests", () => {
  let mockForgotPasswordEmail;
  let mockForgotPasswordSubmit;

  beforeAll(() => {
    mockForgotPasswordEmail = jest
      .spyOn(amplify, "forgotPasswordEmail")
      .mockResolvedValue({ success: true });
    mockForgotPasswordSubmit = jest
      .spyOn(amplify, "forgotPasswordSubmit")
      .mockResolvedValue({ success: true });
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("render test forgot Password Form", () => {
    let onClose = jest.fn();
    render(<ForgottenPasswordForm onClose={onClose} />);
    const email = screen.getByTestId("email-forgot");
    expect(email).toHaveTextContent("");
    expect(screen.queryByText('Code')).not.toBeInTheDocument()
  });

  test("forgot password test confirm submit", async () => {
    let onClose = jest.fn();
    render(<ForgottenPasswordForm onClose={onClose} />);
    const email = screen.getByTestId("email-forgot");

    const submit = screen.getByRole("button", { name: "Submit" });

    fireEvent.change(email, { target: { value: "poorna2152@gmail.com" } });
    fireEvent.click(submit);

    await waitFor(() => screen.getByTestId("forgot-pass"));

    const code = screen.getByTestId("code-forgot");
    const password = screen.getByTestId("password-forgot");
    fireEvent.change(code, { target: { value: "1234" } });
    fireEvent.change(password, { target: { value: "ashJjgjhk_09" } });

    fireEvent.click(submit);

    expect(mockForgotPasswordEmail).toHaveBeenCalled();
    expect(mockForgotPasswordSubmit).toHaveBeenCalled();
  });

  test("forgot password test email submit", async () => {
    let onClose = jest.fn();
    let { getByText } = render(<ForgottenPasswordForm onClose={onClose} />);
    const email = screen.getByTestId("email-forgot");
    const submit = screen.getByRole("button", { name: "Submit" });

    fireEvent.change(email, { target: { value: "poorna2152@gmail.com" } });
    fireEvent.click(submit);
    await waitFor(() => screen.getByTestId("forgot-pass"));

    expect(mockForgotPasswordEmail).toHaveBeenCalled();
    expect(onClose).toHaveBeenCalledTimes(0);
    expect(getByText("Code")).toBeInTheDocument();
  });
});

describe("forgot password form error tests", () => {
  let mockForgotPasswordEmail;

  beforeAll(() => {
    mockForgotPasswordEmail = jest
      .spyOn(amplify, "forgotPasswordEmail")
      .mockResolvedValue({ success: false });
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("forgot password test email submit error", async () => {
    let onClose = jest.fn();
    let { getByText } = render(<ForgottenPasswordForm onClose={onClose} />);
    const email = screen.getByTestId("email-forgot");
    const submit = screen.getByRole("button", { name: "Submit" });

    fireEvent.change(email, { target: { value: "poorna2152@gmail.com" } });
    fireEvent.click(submit);
    await waitFor(() => screen.getByTestId("forgot-pass"));

    expect(mockForgotPasswordEmail).toHaveBeenCalled();
    expect(onClose).toHaveBeenCalledTimes(0);
    expect(getByText("Error")).toBeInTheDocument();
    expect(screen.queryByText('Code')).not.toBeInTheDocument()

  });
});

describe("forgot password form error tests", () => {
  let mockForgotPasswordEmail;
  let mockForgotPasswordSubmit;

  beforeAll(() => {
    mockForgotPasswordEmail = jest
      .spyOn(amplify, "forgotPasswordEmail")
      .mockResolvedValue({ success: true });
    mockForgotPasswordSubmit = jest
      .spyOn(amplify, "forgotPasswordSubmit")
      .mockResolvedValue({ success: false });
  });

  
  test("forgot password test confirm submit error", async () => {
    let onClose = jest.fn();
    let {getByText} = render(<ForgottenPasswordForm onClose={onClose} />);
    const email = screen.getByTestId("email-forgot");

    const submit = screen.getByRole("button", { name: "Submit" });

    fireEvent.change(email, { target: { value: "poorna2152@gmail.com" } });
    fireEvent.click(submit);

    await waitFor(() => screen.getByTestId("forgot-pass"));

    const code = screen.getByTestId("code-forgot");
    const password = screen.getByTestId("password-forgot");
    fireEvent.change(code, { target: { value: "1234" } });
    fireEvent.change(password, { target: { value: "ashJjgjhk_09" } });

    fireEvent.click(submit);

    expect(mockForgotPasswordEmail).toHaveBeenCalled();
    expect(mockForgotPasswordSubmit).toHaveBeenCalled();
    expect(getByText("Error")).toBeInTheDocument();

  });
});
