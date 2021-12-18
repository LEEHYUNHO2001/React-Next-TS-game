import React from "react";
import styled from "styled-components";

import CreateGame from "./CreateGame";

const Article = styled.article`
  padding-right: 500px;
`;

// 시작
const GameMain = ({ value, setValue, answer, setAnswer }) => {
  return (
    <>
      <Article>
        {value.map((row) =>
          row.map((cell, i) => (
            <CreateGame row={row} cell={cell} i={i} setAnswer={setAnswer} />
          ))
        )}
      </Article>
    </>
  );
};

export default GameMain;
