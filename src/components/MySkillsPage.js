import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Skill, Develope } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import {
  DiJavascript1,
  DiBootstrap,
  DiPython,
  DiLaravel,
  DiReact,
  DiPhp,
  DiMysql,
  DiDocker,
  DiPostgresql,
  DiGithub,
  DiGit,
} from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import {
  SiDbeaver,
  SiFigma,
  SiFlask,
  SiGitlab,
  SiGooglesheets,
  SiKubernetes,
  SiPhpmyadmin,
  SiPostman,
  SiXampp,
} from "react-icons/si";
import { PiMicrosoftWordLogo } from "react-icons/pi";
import { AiFillApi } from "react-icons/ai";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Section = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Section}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-items: center;
  align-items: center;
  margin-top: 1rem;
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Section}:hover & {
    color: ${(props) => props.theme.body};
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SkillIcons = [
  { Component: DiJavascript1, size: 60 },
  { Component: DiBootstrap, size: 60 },
  { Component: DiPython, size: 60 },
  { Component: DiLaravel, size: 60 },
  { Component: DiReact, size: 60 },
  { Component: SiFlask, size: 60 },
  { Component: DiPhp, size: 60 },
  { Component: DiMysql, size: 60 },
  { Component: SiPhpmyadmin, size: 60 },
  { Component: SiKubernetes, size: 60 },
  { Component: AiFillApi, size: 60 },
  { Component: DiPostgresql, size: 60 },
  { Component: DiGit, size: 60 },
];

const ToolIcons = [
  { Component: VscVscode, size: 60 },
  { Component: PiMicrosoftWordLogo, size: 60 },
  { Component: SiGooglesheets, size: 60 },
  { Component: SiDbeaver, size: 60 },
  { Component: SiPostman, size: 60 },
  { Component: SiXampp, size: 60 },
  { Component: SiFigma, size: 60 },
  { Component: DiDocker, size: 60 },
  { Component: SiGitlab, size: 60 },
  { Component: DiGithub, size: 60 },
];

const IconList = ({ icons }) => (
  <IconGrid>
    {icons.map((Icon, index) => (
      <Icon.Component key={index} size={Icon.size} />
    ))}
  </IconGrid>
);

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <Section>
          <Title>
            <Skill width={40} height={40} /> Professional Skillset
          </Title>
          <IconList icons={SkillIcons} />
        </Section>

        <Section>
          <Title>
            <Develope width={40} height={40} /> Tools I Use
          </Title>
          <IconList icons={ToolIcons} />
        </Section>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
