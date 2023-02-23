import { render, screen } from "@testing-library/react";
import Demo1 from "./Demo1";


it("my test-case1", () => {
  render(<Demo1/>);
  expect(screen.getByText(/ART/)).toBeInTheDocument();
});
