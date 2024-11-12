import styled, { keyframes } from "styled-components"
import { FaGamepad, FaHeart } from "react-icons/fa"
import aboutSectionImg from "../../assets/images/aboutSection/aboutSection.gif"

const pixelShake = keyframes`
  0% { transform: translate(0, 0); }
  20% { transform: translate(-2px, -2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-2px, 2px); }
  80% { transform: translate(2px, 2px); }
  100% { transform: translate(0, 0); }
`

const pixelJump = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`

const AboutSectionContainer = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${aboutSectionImg});
  background-position: center;
  background-size: cover;
  border-left: 22px #4a4d94 solid;
  border-bottom: 22px #4a9450 solid;
  border-top: 22px #4a9450 solid;
  cursor: default;
  z-index: 2;
  color: #ffffff;
  text-align: center;
  padding: 20px;
  position: relative;
`

const AboutTitle = styled.h1`
  font-size: 70px;
  color: #1d2d22;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  animation: ${pixelJump} 0.8s ease-in-out infinite alternate, ${pixelShake} 1.5s infinite;
  background: #96e8b0;
  padding: 10px;
  @media (max-width: 1180px) {
    font-size: 50px;
  }  
`

const AboutText = styled.p`
  font-size: 30px;
  max-width: 800px;
  color: #96e8b0;
  line-height: 1.6;
  animation: ${pixelShake} 3s infinite;
  background: #1d2d22;
  @media (max-width: 1180px) {
    font-size: 20px;
  }  
`

export default function AboutSection() {
  return (
    <AboutSectionContainer>
      <AboutTitle>
        <FaGamepad size={50} color="blue"/> About Me <FaHeart size={50} color="red"/>
      </AboutTitle>

      <AboutText>
        Hi, I'm Arman Tulembaev, a passionate Game & Frontend Developer. 
        My expertise lies in building immersive and interactive web experiences. 
        I specialize in game development and web technologies, striving to bring unique visual styles 
        and engaging gameplay mechanics to life. Welcome to my portfolio!
      </AboutText>
    </AboutSectionContainer>
  )
}
