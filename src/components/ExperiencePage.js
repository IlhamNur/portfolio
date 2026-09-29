import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";

import { Box, Title, Timeline, TimelineItem, TimelineContent } from "./ExperiencePageStyles";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ExperiencePage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <Title>My Journey</Title>

        <Timeline as={motion.div} variants={container} initial="hidden" animate="show">
          <TimelineItem $left as={motion.div} variants={item}>
            <TimelineContent>
              <h3>Webmaster Intern</h3>
              <h4>Sebelas Maret University • 2022</h4>
              <p>
                Managed and maintained the official website for the Department of Cooperation,
                Development, and Internationalization. Responsible for content updates and ensuring
                site stability.
              </p>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem as={motion.div} variants={item}>
            <TimelineContent>
              <h3>Startup Campus Program</h3>
              <h4>Batch 3 • 2022</h4>
              <p>
                Participated in an intensive bootcamp focusing on modern web technologies,
                startup methodologies, and team collaboration to build scalable applications.
              </p>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem $left as={motion.div} variants={item}>
            <TimelineContent>
              <h3>Freelance Web Developer</h3>
              <h4>Self-Employed • 2023 - Present</h4>
              <p>
                Building responsive, user-friendly websites and web applications for various
                clients using React, Node.js, and modern CSS frameworks.
              </p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </ThemeProvider>
  );
};

export default ExperiencePage;
