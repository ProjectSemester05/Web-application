import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChangePasswordForm from "../../../components/forms/changePassword.jsx";
import * as amplify from "../../../utils/amplifyConf.jsx";

describe("item form tests", () => {
  let mockChangePassword;

  beforeAll(() => {
    mockChangePassword = jest
      .spyOn(amplify, "changePassword")
      .mockResolvedValue({ success: true });
  });

  test("render test change Password Form", () => {
    let onClose = jest.fn();
    render(<ChangePasswordForm  onClose={onClose}/>);
    const password = screen.getByTestId("cpasswd");
    const newPassword = screen.getByTestId("npasswd");
    expect(password).toHaveTextContent("");
    expect(newPassword).toHaveTextContent("");
  });

  test("change password test",async () => {
    let onClose = jest.fn();
    let {getByText} = render(<ChangePasswordForm  onClose={onClose}/>);   
    const password = screen.getByTestId("cpasswd");
    const newPassword = screen.getByTestId("npasswd");
    const submit = screen.getByRole("button", {name:"Submit"});
    fireEvent.change(password, { target: { value: "asaag78@BH_" } });
    fireEvent.change(newPassword, { target: { value: "asaag78@BH_" } });
    fireEvent.click(submit);

    await waitFor(() => screen.getByTestId("change-pass"));

    expect(mockChangePassword).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(getByText("Success")).toBeTruthy()
  });  
});

describe("change password form error test", () => {
    let mockChangePassword;
  
    beforeAll(() => {
      mockChangePassword = jest
        .spyOn(amplify, "changePassword")
        .mockResolvedValue({ success: false });
    });
  
    test("change password error test",async () => {
      let onClose = jest.fn();
      let {getByText} = render(<ChangePasswordForm  onClose={onClose}/>);   
      const password = screen.getByTestId("cpasswd");
      const newPassword = screen.getByTestId("npasswd");
      const submit = screen.getByRole("button", {name:"Submit"});
      fireEvent.change(password, { target: { value: "asaag78@BH_" } });
      fireEvent.change(newPassword, { target: { value: "asaag78@BH_" } });
      fireEvent.click(submit);
  
      await waitFor(() => screen.getByTestId("change-pass"));
  
      expect(mockChangePassword).toHaveBeenCalledTimes(2);
      expect(onClose).toHaveBeenCalledTimes(0);
      expect(getByText("Error")).toBeTruthy()
    });  
  });
  