import { render, screen } from "@testing-library/react";
import axios from "axios";
import Demo10 from "./Demo10";

it("my test-case1", async () => {
  const fakeUser = {
    userId: 1,
    id: 1,
    title: "ART12",
    completed: false,
  };

  const axiosMock = jest
    .spyOn(axios, "get")
    .mockImplementation((url: string) => {
      console.log(url);
      return Promise.resolve<any>({
        data: fakeUser,
      });
    });

    //แทรกแทรง fn axios method get ที่มี param เป้น url ให้ return {data:fakeUser}

    render(<Demo10 id={1} />);

    expect(await screen.findByText(/ART12/)).toBeInTheDocument();
    // expect(await screen.findByText(/ART123/)).toBeInTheDocument();  //error

    axiosMock.mockClear()
});
