import styled from "@emotion/styled";

export const Container = styled.div`
  ${({ theme, isHover }) => `
    background-color: ${isHover ? 'red' : 'blue'};
  `}
`;

export const Label = styled.p`
  font-weight: 900;
`;
