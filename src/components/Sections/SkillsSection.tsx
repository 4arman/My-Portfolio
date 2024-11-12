import styled from "styled-components"
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaPython } from "react-icons/fa"
import { SiTypescript, SiWebpack, SiTailwindcss, SiElectron } from "react-icons/si"

const SkillsSectionContainer = styled.section`
  width: 100%;
  min-height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #2e2f4f;
  border-left: 25px #4a4d94 solid;
  border-bottom: 25px #664a94 solid;
  border-top: 25px #664a94 solid;
  color: #ffffff;
  padding: 40px 20px;
  position: relative;
`

const SkillsTitle = styled.h2`
  font-size: 4rem;
  margin-bottom: 30px;
  color: #ffffff;
`

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
`

const SkillCard = styled.div`
  width: 200px;
  height: 220px;
  background-color: #4a4d94;
  border: 3px solid #7b7dc1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
  }

  &::after {
    content: attr(data-description);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    padding: 10px;
    color: #f1f1f1;
    font-size: 0.9rem;
    opacity: 0;
    transform: translateY(100%);
    transition: opacity 0.3s ease, transform 0.3s ease;
    text-align: left;
  }

  &:hover::after {
    opacity: 1;
    transform: translateY(0);
    text-align: left;
  }
`

const IconContainer = styled.div`
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 10px;
`

const SkillName = styled.div`
  font-size: 1.4rem;
  margin-top: 10px;
`

const skills = [
  { name: "React", icon: <FaReact />, description: "UI library for building interactive UIs" },
  { name: "JavaScript", icon: <FaJs />, description: "Programming language of the web" },
  { name: "HTML", icon: <FaHtml5 />, description: "Markup language for structuring web pages" },
  { name: "CSS", icon: <FaCss3Alt />, description: "Stylesheets for designing web layouts" },
  { name: "Sass", icon: <FaSass />, description: "CSS preprocessor with advanced features" },
  { name: "Git", icon: <FaGitAlt />, description: "Version control for project management" },
  { name: "TypeScript", icon: <SiTypescript />, description: "JavaScript with static typing" },
  { name: "Webpack", icon: <SiWebpack />, description: "Module bundler for JS applications" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, description: "Utility-first CSS framework" },
  { name: "Electron", icon: <SiElectron />, description: "Framework for desktop apps with JS" },
  { name: "Python", icon: <FaPython />, description: "Programming language for various applications" },
]

export default function SkillsSection() {
  return (
    <SkillsSectionContainer>
      <SkillsTitle>My Skills</SkillsTitle>
      <SkillsGrid>
        {skills.map((skill) => (
          <SkillCard key={skill.name} data-description={skill.description}>
            <IconContainer>{skill.icon}</IconContainer>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSectionContainer>
  )
}
