import React from "react";
import { Root } from "../Root";
import ShallowRenderer from "react-test-renderer/shallow";
import configureMockStore from "redux-mock-store";

describe("<Root>", () => {
  it("renders correctly", () => {
    const props = {
      store: configureMockStore()()
    }
    const renderer = new ShallowRenderer();
    renderer.render(<Root {...props} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
