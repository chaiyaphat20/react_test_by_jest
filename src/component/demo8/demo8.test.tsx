import { render, screen } from "@testing-library/react";
import fetch from "jest-fetch-mock";
import { act } from 'react-dom/test-utils';
import Demo8 from "./Demo8";

it("my test-case1", async () => {
  await act(()=>render(<Demo8 id={1} />))
  await new Promise((resolve) => setTimeout(resolve, 3000));  //BAD WAY
  expect(screen.getByText(/delectus aut autem/)).toBeInTheDocument();
});
