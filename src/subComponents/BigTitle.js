import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => `rgba(${props.theme.textRgba},0.1)`};
  font-size: calc(5rem + 5vw);
  font-weight: 700; // Bold
  font-family: "Source Sans Pro", sans-serif;
  z-index: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0); // Subtle shadow for readability

  @media (max-width: 600px) {
    font-size: 4rem; // Adjust for small screens
  }
`;

const BigTitle = (props) => {
  return (
    <Text
      top={props.top}
      left={props.left}
      right={props.right}
      aria-label={props.text}
    >
      {props.text}
    </Text>
  );
};

export default BigTitle;
