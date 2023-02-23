import { render, screen } from "@testing-library/react";
import Demo5 from "./Demo5";

it("my test-case1", () => {
  render(<Demo5 />);
	const textInput = screen.getByTestId('input-text')
	const numberInput = screen.getByTestId('input-number')
	const emptyInput = screen.getByTestId('input-empty')
	const selectInput = screen.getByTestId('select-number')

	expect(textInput).toHaveValue('text')
	expect(numberInput).toHaveValue(5)
	expect(emptyInput).not.toHaveValue()
	expect(selectInput).toHaveValue(['second', 'third'])
});
