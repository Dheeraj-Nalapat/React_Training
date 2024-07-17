import { fireEvent, render } from "@testing-library/react";
import Button from "../Button";
import React from "react";

describe("Check if Button works properly", () => {
  test("first", () => {
    const { getByTestId } = render(<Button />);
    const element = getByTestId("button-test-id");
    console.log(element);
    expect(element).toBeTruthy();
  });
  test("check if text displayed properly", () => {
    const text = "click";
    const { getByText } = render(<Button text={text} />);
    getByText(text);
  });
  test("Check is onClick is triggered", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button handleSubmit={onClick} />);
    const element = getByTestId("button-test-id");
    fireEvent.click(element);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  test("Check if snapshot is mathced properly", () => {
    const onClick = jest.fn();
    const text = "Click";
    const { asFragment } = render(
      <Button text={text} handleSubmit={onClick} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
