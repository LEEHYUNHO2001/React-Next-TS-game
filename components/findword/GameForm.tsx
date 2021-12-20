import React, { useState, memo, useEffect } from "react";
import styled from "styled-components";

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
const Answer = styled.span`
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  margin-left: 30px;
  background: yellow;
  color: red;
`;

// start 이벤트
const start = (m: number, n: number, mine: string) => {
  //n 크기 제한
  if (n >= 45) n = 45;
  //배열 갯수
  const candidate = Array(m * n)
    .fill("")
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
    let arr: any = [];
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

interface GameFormProps {
  setValue: any;
  answer: any;
  setAnswer: any;
}

const GameForm: React.FC<GameFormProps> = ({ setValue, answer, setAnswer }) => {
  const [m, setM] = useState(3);
  const [n, setN] = useState(3);
  const [mine, setMine] = useState("펑");

  const onChangeM = (e: any) => {
    setM(e.target.value);
  };

  const onChangeN = (e: any) => {
    setN(e.target.value);
  };

  const onClickStart = () => {
    setValue(start(m, n, mine));
    setAnswer("");
  };
  return (
    <>
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
    </>
  );
};

export default GameForm;
