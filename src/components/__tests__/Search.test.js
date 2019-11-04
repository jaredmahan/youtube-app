import React from "react";
import { Search } from "../Search";
import ShallowRenderer from "react-test-renderer/shallow";

describe("<Search>", () => {
  it("renders correctly", () => {
    const renderer = new ShallowRenderer();
    const props = {
      query: "query",
      order: "order",
      queryChange: () => null,
      orderChange: () => null
    };
    renderer.render(<Search {...props} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
