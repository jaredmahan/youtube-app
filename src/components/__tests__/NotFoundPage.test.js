import React from "react";
import { NotFoundPage } from "../NotFoundPage";
import ShallowRenderer from "react-test-renderer/shallow";

describe("<NotFoundPage>", () => {
  it("renders correctly", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<NotFoundPage />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
