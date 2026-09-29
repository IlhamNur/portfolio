import React, { useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { JollyRoger } from "./AllSvgs";
import BigTitle from "../subComponents/BigTitle";
import { Box, Main, Rotate } from "./WorkPageStyles";

// Framer-motion Configuration
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

const WorkPage = () => {
  const ref = useRef(null);
  const jollyroger = useRef(null);

  useEffect(() => {
    let element = ref.current;
    let jollyRogerElement = jollyroger.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      jollyRogerElement.style.transform = `rotate(${-window.pageYOffset}deg)`;
    };

    const handleScroll = () => {
      requestAnimationFrame(rotate);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={jollyroger}>
          <JollyRoger width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitle text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
