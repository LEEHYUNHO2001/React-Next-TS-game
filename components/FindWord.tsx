import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  memo,
  useMemo,
} from "react";
import styled from "styled-components";

import GameMain from "./findword/GameMain";
import GameForm from "./findword/GameForm";

// styled 시작
const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 50px 0 0 100px;
`;
// styled 끝

const FindWord = memo(() => {
  const [value, setValue] = useState([]);
  const [answer, setAnswer] = useState("");
  return (
    <>
      <Main>
        <h1>다른 글자 찾기</h1>
        <span>첫 난이도를 결정하세요.</span>
        <GameForm
          value={value}
          setValue={setValue}
          answer={answer}
          setAnswer={setAnswer}
        />
        <GameMain
          value={value}
          setValue={setValue}
          answer={answer}
          setAnswer={setAnswer}
        />
      </Main>
    </>
  );
});

export default FindWord;
