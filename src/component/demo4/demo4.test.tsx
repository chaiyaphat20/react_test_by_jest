import { render, screen } from "@testing-library/react";
import Demo4 from "./Demo4";

it("my test-case1", () => {
  render(<Demo4 />);
  // screen.debug()
  const ancestor = screen.getByTestId("ancestor");
  const descendant = screen.getByTestId("descendant");
  const nonExistantElement = screen.getByTestId("does-not-exist");

  expect(ancestor).toContainElement(descendant);  //ตัวแม่ต้องบรรจุตัวลูก
  expect(descendant).not.toContainElement(ancestor);//ตัวลูกต้องไม่บรรจุตัวแม่
  expect(ancestor).not.toContainElement(nonExistantElement);  //ตัวแม่ไม่ได้บรรจุ ใน nonExistantElement
});
