import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LoginArea from "../../../components/forms/login.jsx";
import * as amplify from "../../../utils/amplifyConf.jsx";

describe("item form tests", () => {
  let mockSignIn;
  let mockLWASignUp;

  beforeAll(() => {
    mockSignIn = jest
      .spyOn(amplify, "signIn")
      .mockResolvedValue({ success: true });
      mockLWASignUp = jest
      .spyOn(amplify, "lwaSignUp")
      .mockResolvedValue({ success: true });
  });

  test("render test login form", () => {
    render(<LoginArea />);
    const email = screen.getByTestId("email-login");
    const password = screen.getByTestId("pass-login");
    expect(password).toHaveTextContent("");
    expect(email).toHaveTextContent("");
  });

  test.skip("test login with amazon",async () => {
    render(<LoginArea />);   
    const submit = screen.getByText("button", {name:"Log In with Amazon"});
    fireEvent.click(submit);
    await waitFor(() => screen.getByTestId("login-form"));

    expect(mockLWASignUp).toHaveBeenCalledTimes(1);
  });  
});

// describe("change password form error test", () => {
//     let mockChangePassword;
  
//     beforeAll(() => {
//       mockChangePassword = jest
//         .spyOn(amplify, "changePassword")
//         .mockResolvedValue({ success: false });
//     });
  
//     test("change password error test",async () => {
//       let onClose = jest.fn();
//       let {getByText} = render(<LoginArea  onClose={onClose}/>);   
//       const password = screen.getByTestId("cpasswd");
//       const newPassword = screen.getByTestId("npasswd");
//       const submit = screen.getByRole("button", {name:"Submit"});
//       fireEvent.change(password, { target: { value: "asaag78@BH_" } });
//       fireEvent.change(newPassword, { target: { value: "asaag78@BH_" } });
//       fireEvent.click(submit);
  
//       await waitFor(() => screen.getByTestId("change-pass"));
  
//       expect(mockChangePassword).toHaveBeenCalledTimes(2);
//       expect(onClose).toHaveBeenCalledTimes(0);
//       expect(getByText("Error")).toBeTruthy()
//     });  
//   });
  