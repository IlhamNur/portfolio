import React from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import chopper from "../assets/Images/chopper_by_toshiharu.png";
import { Box, Main, Spaceman, DownloadButton } from "./AboutPageStyles";

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={chopper} alt="Spaceman" />
        </Spaceman>

        <Main>
          Hi, I'm Ilham. I am interested in becoming a Fullstack Developer.
          <br /> <br />
          I once interned as a Webmaster in the Department of Cooperation,
          Development, and Internationalization at Sebelas Maret University in
          2022.
          <br /> <br />I have also participated in the Startup Campus Batch 3
          program in 2022.
        </Main>

        <DownloadButton href="/CV_Ilham_Nur.pdf" download="CV_Ilham_Nur.pdf">
          Download CV
        </DownloadButton>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
