import styled from "styled-components"
import { FaEnvelope, FaGithub, FaItchIo } from "react-icons/fa"

const ContactSectionContainer = styled.section`
  width: 100%;
  height: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333;
  padding: 40px;
  border-left: 22px #4a4d94 solid;
  border-top: 19px #b0a140 solid;
  border-bottom: 19px #b0a140 solid;
  color: #ffffff;
`

const ContactTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
`

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  color: #ffdd57;
`

const ContactIcon = styled(FaEnvelope)`
  font-size: 2.5rem;
  color: #ffdd57;
`

const ContactDetails = styled.div`
  font-size: 1.2rem;
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
`

const ContactItem = styled.div`
  margin: 5px 0;
`

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`

const SocialIcon = styled.a`
  font-size: 2rem;
  color: #ffdd57;
  transition: color 0.3s ease;

  &:hover {
    color: #e6c847;
  }
`

export default function ContactSection() {
  return (
    <ContactSectionContainer>
      <ContactTitleContainer>
        <ContactIcon />
        <ContactTitle>Contact Me</ContactTitle>
      </ContactTitleContainer>
      <ContactDetails>
        <ContactItem>Email: <a href="mailto:tarman264@gmail.com" style={{ color: "#ffdd57" }}>tarman264@gmail.com</a></ContactItem>
        <ContactItem>Phone: <a href="tel:+998957952612" style={{ color: "#ffdd57" }}>+998 95 795 26 12</a></ContactItem>
      </ContactDetails>
      <SocialMediaContainer>
        <SocialIcon href="https://github.com/4arman" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="https://4arm.itch.io/" target="_blank" rel="noopener noreferrer">
          <FaItchIo />
        </SocialIcon>
      </SocialMediaContainer>
    </ContactSectionContainer>
  )
}
