import styled from "styled-components";
import ConfigDark from "../config/particlesjs-config.json";
import ConfigLight from "../config/particlesjs-config-light.json";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

// Define init outside to keep the function reference completely stable
const particlesInit = async (engine) => {
  await loadFull(engine);
};

const ParticlesComponent = (props) => {
  return (
    <Box>
      <ParticlesProvider init={particlesInit}>
        <Particles
          id={props.theme === "light" ? "tsparticles-light" : "tsparticles-dark"}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, width: "100%", height: "100%" }}
          options={props.theme === "light" ? ConfigLight : ConfigDark}
        />
      </ParticlesProvider>
    </Box>
  );
};

export default ParticlesComponent;
