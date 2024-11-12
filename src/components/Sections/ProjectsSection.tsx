import styled, { keyframes } from "styled-components"
import projectsSectionImg from "../../assets/images/projectsSection/projectsSection.gif"
import frostguardImg from "../../assets/images/projectsSection/frostguard.png"
import blueLockClickerImg from "../../assets/images/projectsSection/blueLockClicker.png"
import memeClickerImg from "../../assets/images/projectsSection/memeClicker.png"
import fingerWrestlingImg from "../../assets/images/projectsSection/fingerWrestling.png"
import petSimulatorImg from "../../assets/images/projectsSection/petSimulator.png"
import aimGameImg from "../../assets/images/projectsSection/aimGame.png"

const slide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

const ProjectsSectionContainer = styled.section`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${projectsSectionImg});
  background-position: center;
  background-size: cover;
  border-left: 22px #4a4d94 solid;
  border-top: 22px #40a7b0 solid;
  border-bottom: 22px #40a7b0 solid;
  color: #ffffff;
  text-align: center;
  padding: 20px;
  position: relative;
  overflow: hidden;
`

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
`

const SliderContent = styled.div`
  display: flex;
  animation: ${slide} 20s linear infinite;
  width: calc(480px * 10);
`

const ProjectCard = styled.div`
  width: 330px;
  height: 400px;
  background-color: #136598;
  border: 6px solid #03324f;
  margin: 20px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: 'Press Start 2P', cursive;
  font-size: 1.2rem;
  box-shadow: 5px 5px 0px #0a3753;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
`

const ProjectImage = styled.div`
  width: 280px;
  height: 200px;
  background-color: #165277;
  background-position: center;
  background-size: cover;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #ffffff;
`

const ProjectTitle = styled.div`
  font-size: 1.5rem;
  margin-top: 10px;
  color: #f1f1f1;
`

const ProjectDescription = styled.div`
  font-size: 1rem;
  color: #d1d1d1;
  margin-top: 10px;
  margin-bottom: 15px;
`

const ProjectButton = styled.a`
  padding: 10px 20px;
  background-color: #3bc6d3;
  color: #ffffff;
  font-size: 1rem;
  text-decoration: none;
  border: 2px solid #0a3753;
  box-shadow: 3px 3px 0px #0a3753;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-color: #32b3bf;
  }
`

export default function ProjectsSection() {
  return (
    <ProjectsSectionContainer>
      <h1 style={{fontSize: '4rem', marginBottom: '20px'}}>My Projects</h1>
      <SliderContainer>
        <SliderContent>
          <ProjectCard>
            <ProjectImage style={{backgroundImage: `url(${frostguardImg})`}} />
            <ProjectTitle>Frostguard</ProjectTitle>
            <ProjectDescription>Turn Based RPG with Strategic Elements</ProjectDescription>
            <ProjectButton href="https://github.com/4arman/Frostguard-Pre-Alpha" target="_blank">Learn More</ProjectButton>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage style={{backgroundImage: `url(${blueLockClickerImg})`}} />
            <ProjectTitle>Blue Lock Clicker</ProjectTitle>
            <ProjectDescription>Clicker game about blue lock. Show your true Ego!</ProjectDescription>
            <ProjectButton href="https://4arm.itch.io/blue-lock-clicker" target="_blank">Learn More</ProjectButton>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage style={{backgroundImage: `url(${fingerWrestlingImg})`}} />
            <ProjectTitle>Finger Wrestling</ProjectTitle>
            <ProjectDescription>Can your Finger beat Friend's?</ProjectDescription>
            <ProjectButton href="https://4arm.itch.io/finger-restling" target="_blank">Learn More</ProjectButton>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage style={{backgroundImage: `url(${petSimulatorImg})`}} />
            <ProjectTitle>Pet Simulator</ProjectTitle>
            <ProjectDescription>Grow up your pet!</ProjectDescription>
            <ProjectButton href="https://github.com/4arman/Pet-Simulator" target="_blank">Learn More</ProjectButton>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage style={{backgroundImage: `url(${memeClickerImg})`}} />
            <ProjectTitle>Meme Clicker</ProjectTitle>
            <ProjectDescription>Funny Clicker game with popular meme characters</ProjectDescription>
            <ProjectButton href="https://4arm.itch.io/meme-clicker" target="_blank">Learn More</ProjectButton>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage style={{backgroundImage: `url(${aimGameImg})`}} />
            <ProjectTitle>Aim Game</ProjectTitle>
            <ProjectDescription>Train your aim skills.</ProjectDescription>
            <ProjectButton href="https://github.com/4arman/Aim-Game-Remake" target="_blank">Learn More</ProjectButton>
          </ProjectCard>

          <ProjectCard>
            <ProjectImage style={{backgroundImage: `url(${frostguardImg})`}} />
            <ProjectTitle>Frostguard</ProjectTitle>
            <ProjectDescription>Turn Based RPG with Strategic Elements</ProjectDescription>
            <ProjectButton href="https://github.com/4arman/Frostguard-Pre-Alpha" target="_blank">Learn More</ProjectButton>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage style={{backgroundImage: `url(${blueLockClickerImg})`}} />
            <ProjectTitle>Blue Lock Clicker</ProjectTitle>
            <ProjectDescription>Clicker game about blue lock. Show your true Ego!</ProjectDescription>
            <ProjectButton href="https://4arm.itch.io/blue-lock-clicker" target="_blank">Learn More</ProjectButton>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage style={{backgroundImage: `url(${fingerWrestlingImg})`}} />
            <ProjectTitle>Finger Wrestling</ProjectTitle>
            <ProjectDescription>Can your Finger beat Friend's?</ProjectDescription>
            <ProjectButton href="https://4arm.itch.io/finger-restling" target="_blank">Learn More</ProjectButton>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage style={{backgroundImage: `url(${petSimulatorImg})`}} />
            <ProjectTitle>Pet Simulator</ProjectTitle>
            <ProjectDescription>Grow up your pet!</ProjectDescription>
            <ProjectButton href="https://github.com/4arman/Pet-Simulator" target="_blank">Learn More</ProjectButton>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage style={{backgroundImage: `url(${memeClickerImg})`}} />
            <ProjectTitle>Meme Clicker</ProjectTitle>
            <ProjectDescription>Funny Clicker game with popular meme characters</ProjectDescription>
            <ProjectButton href="https://4arm.itch.io/meme-clicker" target="_blank">Learn More</ProjectButton>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage style={{backgroundImage: `url(${aimGameImg})`}} />
            <ProjectTitle>Aim Game</ProjectTitle>
            <ProjectDescription>Train your aim skills.</ProjectDescription>
            <ProjectButton href="https://github.com/4arman/Aim-Game-Remake" target="_blank">Learn More</ProjectButton>
          </ProjectCard>
        </SliderContent>
      </SliderContainer>   
    </ProjectsSectionContainer>
  )
}
