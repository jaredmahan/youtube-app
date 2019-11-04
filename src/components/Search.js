import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchWrapper = styled.div`
  display: block;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #333;
`;
const InputWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  & > select {
    padding: 5px;
    border: none;
    border-left: 1px solid #ccc;
    border-radius: 0 2.5px 2.5px 0;
    padding-right: 10px;
  }
`;
const Input = styled.div`
  border-radius: 2.5px 0 0 2.5px;
  display: inline-block;
  background-color: #fff;
  & > input[type="text"] {
    padding: 2.5px 5px;
    margin: 1px;
    border: none;
    height: 19px;
    width: 300px;
  }
`;

export function Search(props) {
  return (
    <SearchWrapper>
      <InputWrapper>
        <Input>
          <input
            type="text"
            placeholder="Begin typing to search..."
            onChange={props.queryChange}
          />
        </Input>
      </InputWrapper>
      <InputWrapper>
        <select value={props.order} onChange={props.orderChange}>
          <option>relevance</option>
          <option>date</option>
          <option>rating</option>
        </select>
      </InputWrapper>
    </SearchWrapper>
  );
}

Search.propTypes = {
  order: PropTypes.string,
  queryChange: PropTypes.func,
  orderChange: PropTypes.func
};

export default Search;
