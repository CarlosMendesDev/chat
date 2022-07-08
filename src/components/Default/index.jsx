import React from "react"
import { Container, Title, Info } from "./styles"
import { MdMessage } from 'react-icons/md'

const Default = () => {
  return (
    <Container>
      <MdMessage />

      <Title>#CHat</Title>

      <Info>
        Aiiiin chatizinho!!
      </Info>
    </Container>
  )
}

export default Default
