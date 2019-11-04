import React from "react";
import { Result } from "../Result";
import ShallowRenderer from "react-test-renderer/shallow";

describe("<Result>", () => {
  it("renders correctly", () => {
    const renderer = new ShallowRenderer();
    const props = {
      result: {
          id: {
              videoId: "videoId",
          },
          snippet: {
            title: "title",
            description: "description",
            thumbnails: {
                default: {
                    url: "fakeUrl",
                    width: 0,
                    height: 0
                }
            }
          } 
      }
    };
    renderer.render(<Result {...props} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
