import { useEffect } from "react"
import styled from "styled-components"
import LoadingScreen from "./components/LoadingScreen"
import HomeSection from "./components/Sections/HomeSection"
import AboutSection from "./components/Sections/AboutSection"
import ProjectsSection from "./components/Sections/ProjectsSection"
import SkillsSection from "./components/Sections/SkillsSection"
import ContactSection from "./components/Sections/ContactSection"

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default function App() {

  useEffect(() => {
    document.body.style.overflow = "hidden"

    const timer = setTimeout(() => {
      document.body.style.overflow = "auto"
    }, 7000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen />
      <Container>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </Container>
    </>
  )
}
