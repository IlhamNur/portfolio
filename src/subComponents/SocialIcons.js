import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Facebook, Github, Instagram, LinkedIn } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";

// Container for social icons
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  @media (max-width: 768px) {
    left: 1rem; // Adjust for smaller screens
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIconWrapper = styled(motion.div)`
  &:hover svg {
    transform: scale(1.1); // Slight zoom effect on hover
    transition: transform 0.3s ease;
  }
`;

const SocialIcons = (props) => {
  const iconColor = props.theme === "dark" ? DarkTheme.text : DarkTheme.body;

  return (
    <Icons>
      <SocialIconWrapper
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          href={"https://github.com/IlhamNur/"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github width={25} height={25} fill={iconColor} />
        </a>
      </SocialIconWrapper>

      <SocialIconWrapper
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          href={"https://www.instagram.com/ilhamm.nr/"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram width={25} height={25} fill={iconColor} />
        </a>
      </SocialIconWrapper>

      <SocialIconWrapper
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          href={"https://facebook.com/ilham.nur.9250595"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Facebook width={25} height={25} fill={iconColor} />
        </a>
      </SocialIconWrapper>

      <SocialIconWrapper
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <a
          href={"https://www.linkedin.com/in/ilham-nur-romdoni-167263206/"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedIn width={25} height={25} fill={iconColor} />
        </a>
      </SocialIconWrapper>

      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
