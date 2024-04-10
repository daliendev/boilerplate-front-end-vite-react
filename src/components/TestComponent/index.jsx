import { useState } from "react";
import { Container, Label } from "./styled";

const TestComponent = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Container
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      isHover={isHover}
    >
      <Label>TestComponent</Label>
    </Container>
  );
};

export default TestComponent;
