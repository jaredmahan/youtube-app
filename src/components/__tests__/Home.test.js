import React from "react";
import { Home } from "../Home";
import ShallowRenderer from "react-test-renderer/shallow";

describe("<Home>", () => {
  it("renders correctly", () => {
    const renderer = new ShallowRenderer();
    const props = {
      query: "query",
      order: "order",
      results: [{ id: 1 }, { id: 2 }, { id: 3 }]
    };
    renderer.render(<Home {...props} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
