import { render, screen } from "@testing-library/react";
import Demo3 from "./Demo3";

it("my test-case1", () => {
  render(<Demo3 />);
	// screen.debug()
  expect(screen.getByTestId("empty")).toBeEmptyDOMElement();
  expect(screen.getByTestId("not-empty")).not.toBeEmptyDOMElement();
  expect(screen.getByTestId("with-whitespace")).not.toBeEmptyDOMElement();
  expect(screen.getByTestId("with-comment")).toBeEmptyDOMElement();
});
