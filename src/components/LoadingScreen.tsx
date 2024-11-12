import { useState } from "react"
import styled from "styled-components"

const LoadingScreenContainer = styled.section`
  width: 100%;
  height: 100%;
  background-color: #41365f;
  color: #ffffff;
  border: 10px #76739d solid;
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  transition: 0.5s;
`

const LoadingText = styled.div`
  font-size: 50px;
  color: #ffffff;
  transition: 0.3s;
`

export default function LoadingScreen() {

  const [loadingScreenOpacity, setLoadingScreenOpacity] = useState(1)
  const [loadingScreenWidth, setLoadingScreenWidth] = useState('100%')
  const [loadingTextOpacity, setLoadingTextOpacity] = useState(1)
  setTimeout(() => setLoadingTextOpacity(0), 5000)
  setTimeout(() => setLoadingScreenWidth('0'), 6000)
  setTimeout(() => setLoadingScreenOpacity(0), 6500)

  return (
    <LoadingScreenContainer style={{opacity: loadingScreenOpacity, width: loadingScreenWidth}}>
      <LoadingText style={{opacity: loadingTextOpacity}}>Loading...</LoadingText>
    </LoadingScreenContainer>
  )
}
