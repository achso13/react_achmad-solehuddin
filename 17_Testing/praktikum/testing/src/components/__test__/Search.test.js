import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { act } from "react-dom/test-utils";
import Search from "../Search";

jest.mock("axios");

describe("Search", () => {
  it("should be able to type on search input", () => {
    render(<Search />);

    const searchInputElement = screen.getByPlaceholderText("Tulis Cerita");

    fireEvent.change(searchInputElement, { target: { value: "ReactJS" } });

    expect(searchInputElement).toHaveValue("ReactJS");
  });

  it("should be able to fetch search data", async () => {
    const stories = [
      { objectID: "1", title: "Hello", url: "hello.com" },
      { objectID: "2", title: "React", url: "reactjs.com" },
    ];

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    );

    render(<Search />);

    await act(() => userEvent.click(screen.getByRole("button")));

    const items = await screen.findAllByRole("listitem");

    expect(items).toHaveLength(2);
  });

  it("should be able to show error messages when error fetching", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    render(<Search />);
    await act(() => userEvent.click(screen.getByRole("button")));

    const messsage = await screen.findByText(/Ada yang error .../);

    expect(messsage).toBeInTheDocument();
  });
});
