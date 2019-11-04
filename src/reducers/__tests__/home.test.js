import { Reducer, initialState } from "../home";
import * as types from "../../constants/actionTypes";

describe("Home Reducer", () => {
  it("default case should return initial state", () => {
    const state = Reducer(initialState, { type: null });
    expect(state).toEqual(initialState);
  });
  it("GET_QUERY_RESULTS_START: should set correct state", () => {
    const action = {
      type: types.GET_QUERY_RESULTS_START,
      query: expect.any(String),
      order: expect.any(String)
    };
    const state = Reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      query: action.query,
      order: action.order,
      loading: true
    });
  });
  it("GET_QUERY_RESULTS_FAILURE: should set correct state", () => {
    const action = {
      type: types.GET_QUERY_RESULTS_FAILURE,
      message: expect.any(String)
    };
    const state = Reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: false,
      errorMessage: action.message
    });
  });
  it("GET_QUERY_RESULTS_SUCCESS: should set correct state", () => {
    const action = {
      type: types.GET_QUERY_RESULTS_SUCCESS,
      query: expect.any(String),
      order: expect.any(String),
      res: expect.any(Array)
    };
    const state = Reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: false,
      result: action.res
    });
  });
});
