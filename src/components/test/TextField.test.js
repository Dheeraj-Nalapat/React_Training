import React from "react";
import TextField from "../TextField";

describe("TextField", () => {
  test("Check for proper label", () => {
    const { getByTestId } = render(<TextField />);
  });
});
