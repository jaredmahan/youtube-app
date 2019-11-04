import React from "react";
import { Loading } from "../Loading";
import ShallowRenderer from "react-test-renderer/shallow";

describe("<Loading>", () => {
  it("renders correctly when loading", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Loading loading={true} loadingText="Loading...">Test</Loading>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
  it("renders correctly when not loading", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Loading loading={false} loadingText="Loading...">Test</Loading>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
