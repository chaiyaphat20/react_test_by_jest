import { render, screen } from "@testing-library/react";
import axios from "axios";
import Demo11 from './Demo11';
import * as Cal from '../../utils/cal'   //ต้อง มัดรวมแบบนี้

it("my test-case1", async () => {
  const addFnMock = jest
    .spyOn(Cal, "add")
    .mockImplementation((a: number,b:number) => {
      return 8
    });

    //รับ function Cal method add ที่รับตัวแปร a,b ที่เป็น number

    render(<Demo11 id={1} />);

    expect(await screen.findByText("ADD: 8")).toBeInTheDocument();
    // expect(await screen.findByText("ADD: 9")).toBeInTheDocument(); //error

    addFnMock.mockClear()
});
