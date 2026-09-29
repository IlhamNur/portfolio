import styled from "styled-components";

export const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: "Ubuntu Mono", monospace;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid ${(props) => props.theme.text};
    background: transparent;
    color: inherit;
    font-family: "Ubuntu Mono", monospace;
    font-size: 1rem;
    outline: none;

    &:focus {
      border-width: 2px;
    }
  }

  textarea {
    resize: none;
    height: 120px;
  }

  button {
    padding: 0.8rem;
    border: 2px solid ${(props) => props.theme.text};
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    font-family: "Ubuntu Mono", monospace;
    font-size: 1.2rem;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
      background: transparent;
      color: ${(props) => props.theme.text};
      border-color: ${(props) => props.theme.text};
    }
  }
`;
