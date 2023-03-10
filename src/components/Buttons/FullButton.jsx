import React from "react";
import styled from "styled-components";
import phoneIcon from "../../assets/pipehouse/phone.svg";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8 extraBold"
      onClick={action ? () => action() : null}
      border={border}
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src={phoneIcon} alt="phone" style={{ marginRight: "10px" }} />
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#fece1a")};
  background-color: ${(props) => (props.border ? "transparent" : "#fece1a")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#181a1c" : "#181a1c")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#fece1a")};
    border: 1px solid #fece1a;
    color: ${(props) => (props.border ? "#181a1c" : "#181a1c")};
  }
`;
