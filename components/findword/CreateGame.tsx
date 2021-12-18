import React, { useMemo } from "react";
import styled from "styled-components";

const Item = styled.button`
  color: #fff;
  background: #000;
`;

const CreateGame = ({ row, cell, i, setAnswer }) => {
  const onClickItem = (row, cell) => {
    console.log(row, cell);
    let a = row.filter((v) => v === cell).length;
    if (a === 1) {
      setAnswer("");
      alert("성공");
    } else {
      setAnswer("실패");
    }
  };

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
