import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  memo,
  useMemo,
} from "react";
import styled from "styled-components";

// styled 시작
const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 50px 0 0 100px;
`;
const Section = styled.section`
  width: 1300px;
  font-size: 25px;
`;
const Input = styled.input`
  width: 300px;
  height: 30px;
  margin: 0 50px 50px 20px;
  font-size: 25px;
`;
const StartBtn = styled.button`
  width: 100px;
  height: 50px;
  background: #000;
  color: #fff;
  border: none;
  font-size: 25px;
  font-weight: bold;
  border-radius: 10px;
`;
const Article = styled.article`
  padding-right: 500px;
`;
const Item = styled.button`
  color: #fff;
  background: #000;
`;
const Answer = styled.span`
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  margin-left: 30px;
  background: yellow;
  color: red;
`;
// styled 끝

// start 이벤트
const start = (m, n, mine) => {
  //n 크기 제한
  if (n >= 45) n = 45;
  //배열 갯수
  const candidate = Array(m * n)
    .fill()
    .map((arr, i) => {
      return i;
    });
  console.log(candidate);

  // 마인 랜덤 위치
  const chose = candidate.splice(
    Math.floor(Math.random() * candidate.length),
    1,
  )[0];

  let data = [];
  for (let i = 0; i < m; i++) {
    let arr = [];
    data.push(arr);
    for (let j = 0; j < n; j++) {
      arr.push("꼍");
    }
  }
  console.log(chose);
  data[Math.floor(chose / n)][chose % n] = mine;
  console.log(data);
  return data;
};

// 시작
const GameForm = memo(() => {
  const [m, setM] = useState(3);
  const [n, setN] = useState(3);
  const [value, setValue] = useState([]);
  const [mine, setMine] = useState("껻");
  const [answer, setAnswer] = useState("");

  const onChangeM = (e) => {
    setM(e.target.value);
  };

  const onChangeN = (e) => {
    setN(e.target.value);
  };

  const onClickStart = () => {
    setValue(start(m, n, mine));
    setAnswer("");
  };

  const onClickItem = (row, cell, e) => {
    console.log(row, cell);
    let a = row.filter((v) => v === cell).length;
    let message = a === 1 ? "정답" : "실패";
    setAnswer(message);
  };

  const createBtn = (row, cell, i) => {
    if (row.length - 1 === i) {
      return (
        <>
          <Item
            onClick={(e) => {
              onClickItem(row, cell, e);
            }}
            className="items"
            key={i}
          >
            {cell}
          </Item>
          <br />
        </>
      );
    } else {
      return (
        <Item
          onClick={(e) => {
            onClickItem(row, cell, e);
          }}
          className="items"
          key={i}
        >
          {cell}
        </Item>
      );
    }
  };

  return (
    <>
      <Main>
        <Section>
          M :
          <Input
            type="number"
            placeholder="가로"
            value={m}
            onChange={onChangeM}
          />
          N :
          <Input
            type="number"
            placeholder="세로"
            value={n}
            onChange={onChangeN}
          />
          <StartBtn onClick={onClickStart}>시작</StartBtn>
          {answer !== "" && <Answer>{answer}</Answer>}
        </Section>
        <Article>
          {value.map((row) => row.map((cell, i) => createBtn(row, cell, i)))}
        </Article>
      </Main>
    </>
  );
});

const Game = memo(() => {
  return (
    <>
      <GameForm />
    </>
  );
});

export default Game;
