import React from "react";

export const Loading = ({ loadingText, loading, children }) =>
  loading ? <div>{loadingText}</div> : children;

export default Loading;
