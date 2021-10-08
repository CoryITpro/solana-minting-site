import styled from "styled-components"

export const SneakPeekImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  border-radius: 16px;
  overflow: hidden;

  &:before {
    content: " ";
    width: 100%;
    padding-top: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${(props) => props.image});
  }
`
