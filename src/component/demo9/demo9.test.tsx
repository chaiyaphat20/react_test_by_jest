import { render, screen } from "@testing-library/react";
import fetch from "jest-fetch-mock";
import { act } from 'react-dom/test-utils';
import Demo9 from './Demo9';

it("my test-case1", async () => {
  // render(<Demo9 id={1} />);
  await act(()=>render(<Demo9 id={1} />))
  expect(await screen.findByText(/delectus aut autem/)).toBeInTheDocument();

  // screen.findByText  จะ await นิดนึง  //find จะ await นิดนึง
});
