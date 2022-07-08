import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../../services/firebase'
import { Container, Content, Divider } from './styles'
import { useCollection } from 'react-firebase-hooks/firestore'
import ChatCardItems from '../ChatCardItems'

const ChatCard = ({ setUserChat, userChat }) => {
  const [user] = useAuthState(auth)

  const refChat = db
    .collection('chats')
    .where('users', 'array-contains', user.email)

  const [chatsSnapshot] = useCollection(refChat)

  return (
    <Container>
      {chatsSnapshot?.docs.map((item, index) => (
        <Content key={index}>
          <ChatCardItems
            id={item.id}
            users={item.data().users}
            user={user}
            setUserChat={setUserChat}
            active={userChat?.chatId === item.id ? 'active' : ''}
          />

          <Divider />
        </Content>
      ))}
    </Container>
  )
}

export default ChatCard
