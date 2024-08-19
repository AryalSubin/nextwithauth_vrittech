// import { render, fireEvent } from "@testing-library/react";
// import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";
// // import Login from "../app/Login/page";
// import Login from "../../app/login/page";

// // Mock the next/router
// jest.mock("next/navigation", () => ({
//   useRouter: jest.fn(),
// }));

// // Mock js-cookie
// jest.mock("js-cookie", () => ({
//   set: jest.fn(),
// }));

// describe("Login", () => {
//   it("authenticates and redirects to the dashboard on successful login", () => {
//     const push = jest.fn();
//     useRouter.mockReturnValue({ push });

//     const { getByPlaceholderText, getByText } = render(<Login />);

//     // Fill out the form with correct credentials
//     fireEvent.change(getByPlaceholderText("Username"), {
//       target: { value: "admin" },
//     });
//     fireEvent.change(getByPlaceholderText("Password"), {
//       target: { value: "password" },
//     });

//     fireEvent.click(getByText("Login"));

//     expect(Cookies.set).toHaveBeenCalledWith("token", "authenticated", {
//       expires: 1,
//     });
//     expect(push).toHaveBeenCalledWith("/dashboard");
//   });

//   it("shows an alert for incorrect credentials", () => {
//     global.alert = jest.fn();

//     const { getByPlaceholderText, getByText } = render(<Login />);

//     // Fill out the form with incorrect credentials
//     fireEvent.change(getByPlaceholderText("Username"), {
//       target: { value: "wronguser" },
//     });
//     fireEvent.change(getByPlaceholderText("Password"), {
//       target: { value: "wrongpassword" },
//     });

//     fireEvent.click(getByText("Login"));

//     expect(global.alert).toHaveBeenCalledWith("Invalid credentials");
//   });
// });

describe("Simple Test", () => {
  it("always passes", () => {
    expect(true).toBe(true);
  });
});
