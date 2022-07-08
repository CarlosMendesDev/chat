import React from 'react'
import { Container } from './styles'
import SidebarHeader from '../SidebarHeader'
import ChatCard from '../ChatCard'

const Sidebar = ({ setUserChat, userChat }) => {
  return (
    <Container>
      <SidebarHeader setUserChat={setUserChat}></SidebarHeader>
      <ChatCard setUserChat={setUserChat} userChat={userChat}></ChatCard>
    </Container>
  )
}

export default Sidebar
