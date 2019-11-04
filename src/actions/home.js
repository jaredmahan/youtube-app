import * as types from "../constants/actionTypes";

export const getYouTubeResultsStart = (query, order) => {
  return {
    type: types.GET_QUERY_RESULTS_START,
    query,
    order
  };
};

export const getYouTubeResultsSuccess = res => {
  return {
    type: types.GET_QUERY_RESULTS_SUCCESS,
    res
  };
};

export const getYouTubeResultsFailure = (message) => {
  return {
    type: types.GET_QUERY_RESULTS_FAILURE,
    message
  };
};

export function getYouTubeResults(query, order = "relevance") {
  const thunk = async (dispatch, getState, { youtubeApi }) => {
    try {
      dispatch(getYouTubeResultsStart(query, order));

      const res = await youtubeApi.searchByKeywordWithStatistics(query, order);

      if (res.status >= 400) {
        dispatch(getYouTubeResultsFailure(res.error));
      } else {
        dispatch(getYouTubeResultsSuccess(res.result));
      }
    } catch (err) {
      return dispatch(
        getYouTubeResultsFailure(
          "Could not reach the server. Please try again later."
        )
      );
    }
  };

  thunk.meta = {
    debounce: {
      time: 1000,
      key: "GET-YOUTUBE-RESULTS"
    }
  };

  return thunk;
}
