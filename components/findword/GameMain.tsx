import type { NextPage } from "next";
import React, { useState } from "react";
import styled from "styled-components";

import CreateGame from "./CreateGame";

const Article = styled.article`
  padding-right: 500px;
`;

interface GameMainProps {
  value: any;
  setAnswer: any;
}

// 시작
const GameMain: React.FC<GameMainProps> = ({ value, setAnswer }) => {
  return (
    <>
      <Article>
        {value.map((row: any) =>
          row.map((cell: any, i: number) => (
            <CreateGame
              row={row}
              cell={cell}
              key={i}
              i={i}
              setAnswer={setAnswer}
            />
          )),
        )}
      </Article>
    </>
  );
};

export default GameMain;
