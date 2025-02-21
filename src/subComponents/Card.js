import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Github } from "../components/AllSvgs";

const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);

  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const Git = styled.a`
  color: inherit;
  text-decoration: none;
  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Card = (props) => {
  const { id, name, description, tags, demo, github } = props.data;

  return (
    <Box key={id} variants={Item}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {tags.map((tag, id) => (
          <Tag key={id}>#{tag}</Tag>
        ))}
      </Tags>
      <Footer>
        <Link href={demo} target="_blank" aria-label={`Visit ${name} demo`}>
          Visit
        </Link>
        <Git
          href={github}
          target="_blank"
          aria-label={`View ${name} on GitHub`}
        >
          <Github width={30} height={30} />
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;
