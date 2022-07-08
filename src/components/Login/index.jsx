import React from "react"
import { auth, provider } from "../../services/firebase"
import { Container, Button } from './styles'

const Login = () => {
  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert)
  }

  return (
    <Container>
      <Button onClick={handleSignin}>Login com Google</Button>
    </Container>
  )
}

export default Login
