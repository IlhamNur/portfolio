import React, { useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import emailjs from "@emailjs/browser";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import { Box, Main, Form } from "./ContactPageStyles";

const ContactPage = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // TODO: GANTI TEMPLATE_ID DAN PUBLIC_KEY DI BAWAH INI
    const serviceId = "service_6g79ywb";
    const templateId = "template_bzree7d";
    const publicKey = "sTQ1bkZUj7cWeR2cv";

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        setStatus("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        setStatus("Failed to send the message. Please try again.");
      }
    );
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <Main>
          <h2>Contact Me</h2>
          <Form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit">Send Message</button>
            {status && <p style={{ textAlign: "center", marginTop: "1rem" }}>{status}</p>}
          </Form>
        </Main>

        <BigTitle text="CONTACT" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default ContactPage;
