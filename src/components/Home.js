import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Search } from "../components/Search";
import { Result } from "../components/Result";
import { Loading } from "../components/Loading";

const List = styled.div`
  & > div:nth-child(even) {
    background-color: #f7f7f7;
  }
`;

export function Home(props) {
  return (
    <div>
      <Search
        order={props.order}
        queryChange={props.queryChange}
        orderChange={props.orderChange}
      />
      {props.errorMessage && <em>{props.errorMessage}</em>}
      <Loading loading={props.loading} loadingText="Loading your results...">
        {!!props.results && (
          <List>
            {props.results.length > 0 &&
              props.results.map((result, index) => (
                <Result key={index} result={result} />
              ))}
          </List>
        )}
        {!!props.results &&
          (props.results.length < 0 && (
            <em>No results found based on your query.</em>
          ))}
      </Loading>
    </div>
  );
}

Home.propTypes = {
  query: PropTypes.string,
  order: PropTypes.string,
  queryChange: PropTypes.func,
  orderChange: PropTypes.func
};

export default Home;
