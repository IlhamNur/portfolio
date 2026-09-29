import styled from "styled-components";

export const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
  width: 100vw;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem 2rem 2rem;
  overflow-y: auto;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.text};
  font-family: "Ubuntu Mono", monospace;
  font-size: 3rem;
  margin-bottom: 2rem;
  z-index: 3;
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  width: 80%;
  max-width: 800px;
  z-index: 3;

  &::before {
    content: '';
    position: absolute;
    width: 4px;
    background-color: ${(props) => props.theme.text};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
  }

  @media (max-width: 600px) {
    &::before {
      left: 31px;
    }
  }
`;

export const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  box-sizing: border-box;
  background-color: inherit;
  width: 50%;
  left: ${(props) => (props.$left ? "0" : "50%")};
  box-sizing: border-box;

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    right: ${(props) => (props.$left ? "-14px" : "auto")};
    left: ${(props) => (props.$left ? "auto" : "-14px")};
    background-color: ${(props) => props.theme.body};
    border: 4px solid ${(props) => props.theme.text};
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;

    &::after {
      left: 21px;
    }
  }
`;

export const TimelineContent = styled.div`
  padding: 20px 30px;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  position: relative;
  box-sizing: border-box;
  border-radius: 6px;
  font-family: "Karla", sans-serif;

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }
  
  h4 {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-style: italic;
    opacity: 0.8;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`;
