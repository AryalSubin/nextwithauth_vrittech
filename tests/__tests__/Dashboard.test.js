// tests/__tests__/Dashboard.test.js
import { render } from "@testing-library/react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Dashboard from "../../app/dashboard/page";

// Mock the `useRouter` hook from Next.js
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

// Mock `js-cookie`
jest.mock("js-cookie", () => ({
  get: jest.fn(),
}));

describe("Dashboard", () => {
  it("redirects unauthenticated users to the login page", () => {
    const push = jest.fn();
    useRouter.mockReturnValue({ push });

    Cookies.get.mockReturnValue(null);

    render(<Dashboard />);

    expect(push).toHaveBeenCalledWith("/login");
  });
});
