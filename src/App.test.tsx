import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it("my test-case1",()=>{
  render(<><div>My name is ART</div></>)
  //คำว่า get ต้องเป็น การแสดงผลทันที  คำว่า get มันจะมองหา element ซึ่งจะเจอคำว่า My name is ART
  // /ART/
  expect(screen.getByText(/ART/)).toBeInTheDocument();
})
