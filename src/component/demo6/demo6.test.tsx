import { render, screen } from "@testing-library/react";
import Demo6 from "./Demo6";

it("my test-case1", () => {
  render(<Demo6 />);
	expect(screen.getAllByTestId("li").length).toBe(4)
	//นับรวมไอดี
});
