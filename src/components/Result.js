import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #ccc;
  border-top-width: 0;
  padding: 10px;
`;

export function Result({ result }) {
  return (
    <Wrapper key={result.id.videoId}>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.youtube.com/watch?v=${result.id.videoId}`}
          dangerouslySetInnerHTML={{ __html: result.snippet.title }}
        />
      </div>
      <div>{result.snippet.description}</div>
      <img
        alt="Video Thumbnail"
        src={result.snippet.thumbnails.default.url}
        height={result.snippet.thumbnails.default.height}
        width={result.snippet.thumbnails.default.width}
      />
      {!!result.statistics && !!result.statistics.commentCount && (
        <div>
          {result.statistics.commentCount}
          <span> Comments</span>
        </div>
      )}
    </Wrapper>
  );
}

Result.propTypes = {
  result: PropTypes.object.isRequired
};

export default Result;
