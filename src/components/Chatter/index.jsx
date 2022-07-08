import React from "react"
import ChatHeader from '../ChatterHeader'
import { Container } from "./styles"
import ChatBody from '../ChatterBody'
import ChatFooter from '../ChatterFooter'
import Default from "../Default"

const Chatter = ({ userChat }) => {
  if (!userChat) return <Default />

  return (
    <Container>
      <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
      <ChatBody chatId={userChat?.chatId} />
      <ChatFooter chatId={userChat?.chatId} />
    </Container>
  )
}

export default Chatter
