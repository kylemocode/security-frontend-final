import React from "react";
import { Container, Svg, Circle, SmallCircle } from "./style";

const Loader = React.memo(() => {
  return (
    <Container>
      <Svg height="150" width="150">
        <Circle cx="75" cy="75" r="40" />
        <SmallCircle cx="75" cy="35" r="4" />
        <SmallCircle cx="75" cy="115" r="4" />
      </Svg>
    </Container>
  );
});

export default Loader;
