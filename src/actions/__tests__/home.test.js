import {
  getYouTubeResultsStart,
  getYouTubeResultsSuccess,
  getYouTubeResultsFailure,
  getYouTubeResults
} from "../../actions/home";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as types from "../../constants/actionTypes";

const createMockApi = ({ status, result, error }) => ({
  searchByKeywordWithStatistics: async () => await { status, result, error }
});

const createMockStore = extraArgument =>
  configureMockStore([thunk.withExtraArgument(extraArgument)])();

describe("Home Actions", () => {
  it("getYouTubeResultsStart should return correct object", () => {
    expect(
      getYouTubeResultsStart(expect.any(String), expect.any(String))
    ).toStrictEqual({
      type: types.GET_QUERY_RESULTS_START,
      query: expect.any(String),
      order: expect.any(String)
    });
  });
  it("getYouTubeResultsSuccess should return correct object", () => {
    expect(getYouTubeResultsSuccess(expect.any(Object))).toStrictEqual({
      type: types.GET_QUERY_RESULTS_SUCCESS,
      res: expect.any(Object)
    });
  });

  it("getYouTubeResultsFailure should return correct object", () => {
    expect(getYouTubeResultsFailure(expect.any(String))).toStrictEqual({
      type: types.GET_QUERY_RESULTS_FAILURE,
      message: expect.any(String)
    });
  });
  it("getYouTubeResults: should dispatch success action when status is successful", async () => {
    const mockStore = createMockStore({
      youtubeApi: createMockApi({ status: 200, result: expect.any(Object) })
    });

    await mockStore.dispatch(getYouTubeResults("test", expect.any(String)));

    const actions = mockStore.getActions();
    expect(actions[0]).toStrictEqual(
      getYouTubeResultsStart(expect.any(String), expect.any(String))
    );
    expect(actions[1]).toStrictEqual(
      getYouTubeResultsSuccess(expect.any(Object))
    );
  });

  it("getYouTubeResults: should dispatch failure when error status is returned", async () => {
    const mockStore = createMockStore({
      youtubeApi: createMockApi({ status: 500, error: expect.any(String) })
    });

    await mockStore.dispatch(getYouTubeResults("test", expect.any(String)));

    const actions = mockStore.getActions();
    expect(actions[0]).toStrictEqual(
      getYouTubeResultsStart(expect.any(String), expect.any(String))
    );
    expect(actions[1]).toStrictEqual(
      getYouTubeResultsFailure(expect.any(String))
    );
  });
});
