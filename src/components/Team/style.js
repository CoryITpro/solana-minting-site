import styled from "styled-components"

export const TeamSection = styled.div`
  position: relative;
  width: 100%;
  padding: 128px calc((100% - 1280px) / 2) 32px;
  z-index: 3;

  @media (max-width: 768px) {
    padding: 64px calc((100% - 1280px) / 2) 32px;
  }
`

export const TeamBackgroundWrapper = styled.div`
  position: absolute;
  width: 100%;

  & > img {
    width: 100%;
    max-height: 700px;
    z-index: 0;
  }
`

export const TeamTitle = styled.div`
  padding: 32px;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: ${(props) => props.theme.black};

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 425px) {
    font-size: 24px;
    padding: 8px;
  }
`

export const TeamMemberWrapper = styled.div`
  padding: 16px 32px;
  display: grid;
  grid-template-columns: calc(25% - 24px) calc(25% - 24px) calc(25% - 24px) calc(
      25% - 24px
    );
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: calc(50% - 12px) calc(50% - 12px);

    & > div:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  @media (max-width: 425px) {
    padding: 16px 48px;
    grid-template-columns: auto;
  }
`

export const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span {
    font-size: 16px;
    text-align: center;
    color: ${(props) => props.theme.black};

    &:not(:last-child) {
      font-size: 24px;
      color: ${(props) => props.theme.purple};
      margin-top: 8px;
    }
  }

  &:before {
    content: "";
    width: 100%;
    padding-top: 100%;
    border-radius: 48px;
    background-size: cover;
    background-image: url(${(props) => props.image});
    overflow: hidden;
  }
`
