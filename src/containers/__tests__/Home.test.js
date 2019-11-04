import React from "react";
import { HomeContainer } from "../Home";
import ShallowRenderer from "react-test-renderer/shallow";

describe("<HomeContainer>", () => {
  it("should render correctly", () => {
    const renderer = new ShallowRenderer();
    const props = {
      query: "query",
      order: "order",
      loading: false,
      results: [{ id: 1 }, { id: 2 }, { id: 3 }],
      actions: {}
    };
    renderer.render(<HomeContainer {...props} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
  it("handleOrderChange should call the getYouTubeResults action", () => {
    const props = {
      actions: {
        getYouTubeResults: jest.fn()
      }
    };
    const component = new HomeContainer(props);
    component.handleOrderChange();
    expect(props.actions.getYouTubeResults).toBeCalledTimes(1);
  });
  it("handleQueryChange should call the getYouTubeResults action", () => {
    const props = {
      actions: {
        getYouTubeResults: jest.fn()
      }
    };
    const component = new HomeContainer(props);
    component.handleQueryChange();
    expect(props.actions.getYouTubeResults).toBeCalledTimes(1);
  });
});
