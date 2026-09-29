import React from "react";
import { ThemeProvider } from "styled-components";
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
import { Box, IconGrid, Section, Title } from "./MySkillsPageStyles";

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
