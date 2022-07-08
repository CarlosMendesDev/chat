import React from "react"
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../services/firebase'
import {
  Container,
  Line,
  Content,
  MessageText,
  MessageDate
} from './styles'

const Message = ({ user, message }) => {
  const [userLoggedIn] = useAuthState(auth)

  return (
    <Container>
      <Line className={userLoggedIn?.email === user ? 'me' : ''}>
        <Content>
          <MessageText>{message.message}</MessageText>

          <MessageDate>
            {new Date(message?.timestamp).toLocaleDateString()}
          </MessageDate>
        </Content>
      </Line>
    </Container>
  )
}

export default Message
