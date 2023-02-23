import { getByTestId, render, screen } from "@testing-library/react";
import Demo2 from "./Demo2";

it("my test-case1", () => {
  render(<Demo2 />);
  expect(screen.getByTestId("button")).toBeDisabled();
  expect(screen.getByTestId("input")).toBeDisabled();
  expect(screen.getByTestId("button2")).not.toBeDisabled();
});
