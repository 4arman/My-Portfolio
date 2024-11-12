import styled, { keyframes } from "styled-components"
import { FaItchIo, FaGithub } from "react-icons/fa"
import homeSectionImg from "../../assets/images/HomeSection/homeSection.gif"

const moveLeft = keyframes`
  0% {
    transform: translateX(100vw);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(-100vw);
    opacity: 0;
  }
`

interface ShapeProps {
  top: number;
  left: number;
  size: number;
  color: string;
  duration: number;
  rotate: number;
}

const Shape = styled.div<ShapeProps>`
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
  opacity: 0.6;
  animation: ${moveLeft} ${(props) => props.duration}s linear infinite;
  transform: rotate(${(props) => props.rotate}deg);
`

const Square = styled(Shape)`
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
`

const Triangle = styled(Shape)`
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`

const Plus = styled(Shape)`
  clip-path: polygon(
    40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%,
    60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%
  );
`

const HomeSectionContainer = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${homeSectionImg});
  background-position: center;
  background-size: cover;
  border-top: 22px #a73db9 solid;
  border-left: 22px #4a4d94 solid;
  border-bottom: 22px #a73db9  solid;
  position: relative;
  overflow: hidden;
`

const flicker = keyframes`
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    opacity: 1;
  }
  20%, 24%, 55% {
    opacity: 0.4;
  }
`

const Name = styled.div`
  font-size: 6rem;
  font-family: 'font-2';
  color: #a200ff;
  position: absolute;
  left: 35px;
  bottom: 25px;
  text-shadow: 
    0 0 5px #7b00ff, 
    0 0 10px #7b00ff, 
    0 0 10px #7b00ff, 
    0 0 20px #4700cc, 
    0 0 30px #4700cc, 
    0 0 40px #380099;
  animation: ${flicker} 2.5s infinite;
  text-align: center;
  @media (max-width: 1180px) {
    font-size: 6rem;
    margin-left: 0;
    top: 25px;
  }  
  @media (max-width: 800px) {
    width: 100%;
    font-size: 3.8rem;
    margin-left: 0;
    top: 25px;
  }
  @media (max-width: 450px) {
    width: 100%;
    font-size: 3rem;
    margin-left: 0;
    top: 25px;
  }
`

const SecondName = styled.span`
  right: 39px;
  position: relative;
  font-family: 'font-2';
  color: #87ff41;
    text-shadow: 
    0 0 5px #0dff00, 
    0 0 10px #0dff00, 
    0 0 10px #0dff00, 
    0 0 20px #03cc00, 
    0 0 30px #03cc00, 
    0 0 40px #00990a;
`

const Description = styled.div`
  font-size: 3rem;
  color: #ffffff;
  position: absolute;
  left: 40px;
  bottom: 140px;
  text-shadow: 
    0 0 5px #d2d2d2, 
    0 0 10px #d2d2d2, 
    0 0 10px #d2d2d2, 
    0 0 20px #d2d2d2, 
    0 0 30px #d2d2d2, 
    0 0 40px #d2d2d2;
  animation: ${flicker} 1.5s infinite;
  text-align: center;
  @media (max-width: 1180px) {
    left: 50%;
    top: 65%;
    transform: translate(-50%, -65%);
  }
  @media (max-width: 800px) {
    top: 60%;
  }
  @media (max-width: 450px) {
    top: 53%;
    font-size: 2.5rem;
  }
`

const SocialMediasContainer = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  right: 25px;
  top: 25px;
  & * {
    margin: 10px;
    cursor: pointer;
    &:hover {
      transform: translate(-5px);
    }
  }
  @media (max-width: 1180px) {
    bottom: -200px;
  }
  @media (max-width: 450px) {
    left: 50%;
    top: 107%;
    transform: translate(-50%, -107%);
    flex-direction: row;
  }
`

export default function HomeSection() {
  return (
    <HomeSectionContainer>
      <Name>ARMAN <SecondName>Tulembaev</SecondName></Name>
      <Description>Game & Frontend - Developer</Description>
      <SocialMediasContainer>
        <a href="https://4arm.itch.io/" target="_blank"><FaItchIo size={55} color="#ffffff"/></a>
        <a href="https://github.com/4arman" target="_blank"><FaGithub size={55} color="#ffffff"/></a>
      </SocialMediasContainer>
      <Square top={20} left={100} size={50} color="#ff6b6b" duration={8} rotate={0} />
      <Triangle top={40} left={110} size={60} color="#48dbfb" duration={7} rotate={45} />
      <Plus top={60} left={120} size={70} color="#feca57" duration={9} rotate={0} />
      <Square top={80} left={130} size={55} color="#1dd1a1" duration={10} rotate={15} />
      <Triangle top={10} left={140} size={65} color="#ff9ff3" duration={6} rotate={0} />
      <Plus top={50} left={150} size={75} color="#5f27cd" duration={8} rotate={90} />
      <Square top={70} left={160} size={60} color="#ff6b6b" duration={5} rotate={30} />
      <Triangle top={30} left={170} size={70} color="#48dbfb" duration={7} rotate={15} />
      <Plus top={90} left={180} size={80} color="#feca57" duration={9} rotate={45} />
      <Square top={15} left={190} size={65} color="#1dd1a1" duration={8} rotate={0} />
      <Triangle top={55} left={200} size={50} color="#ff9ff3" duration={6} rotate={30} />
      <Plus top={25} left={210} size={60} color="#5f27cd" duration={10} rotate={45} />
    </HomeSectionContainer>
  )
}
