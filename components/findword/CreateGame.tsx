import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Item = styled.button`
  color: #fff;
  background: #000;
`;

interface CrerateGameProps {
  row: any;
  cell: any;
  key: number;
  i: number;
  setAnswer: any;
}

const CreateGame: React.FC<CrerateGameProps> = ({
  row,
  cell,
  key,
  i,
  setAnswer,
}) => {
  const onClickItem = (row: any, cell: any) => {
    console.log(row, cell);
    let a = row.filter((v: string) => v === cell).length;
    if (a === 1) {
      setAnswer("");
      alert("성공");
    } else {
      setAnswer("실패");
    }
  };
  console.log("row.length : ", row, "cell", cell, "i", i);

  if (row.length - 1 === i) {
    return (
      <>
        <Item
          onClick={(e) => {
            onClickItem(row, cell);
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
          onClickItem(row, cell);
        }}
        className="items"
        key={i}
      >
        {cell}
      </Item>
    );
  }
};

export default CreateGame;
