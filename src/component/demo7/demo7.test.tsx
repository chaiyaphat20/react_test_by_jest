import { fireEvent, render, screen } from "@testing-library/react";
import Demo7 from "./Demo7";

it("my test-case1", () => {
  render(<Demo7 />);
  const btn =  screen.getByRole("button",{name:"Fetch"})  //getByRole  check element  บาง element จะมี role ได้ เช่น button, image , checkbox
  expect(btn).toBeInTheDocument();

  //click 1
  fireEvent.click(btn);
  expect(screen.getAllByRole("item").length).toBe(4)  //แต่ถ้าไม่มี role ก็ต้องใส่เอง

  //click 2
  fireEvent.click(btn);
  expect(screen.getAllByRole("item").length).toBe(8)  //แต่ถ้าไม่มี role ก็ต้องใส่เอง

  const btnClear =  screen.getByRole("button",{name:"Clear"})
  fireEvent.click(btnClear);
  expect(screen.queryByRole("item")).not.toBeInTheDocument()  //queryByRole ถ้าไม่เจอ มันจะ return null
});
