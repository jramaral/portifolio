import React from "react";

import styled from "styled-components";
import Animate from "animate.css-react";
import "animate.css";

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default function App() {
  return (
    <>
      <Title>
        <p className="animate__animated animate__bounce">An animated element</p>
        <p className="animate__animated animate__backInLeft">
          An animated element
        </p>
        <p className="animate__animated animate__backInDown">
          An animated element
        </p>
      </Title>
    </>
  );
}
