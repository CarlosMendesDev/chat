import React, { useEffect, useRef } from "react"
import { db } from '../../services/firebase'
import { Container } from './styles'
import { useCollection } from 'react-firebase-hooks/firestore'
import Message from '../Message'

const ChatterBody = ({ chatId }) => {
  const [messages] = useCollection(
    db
      .collection('chats')
      .doc(chatId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
  )

  const refBody = useRef('');

  useEffect(() => {
    if (refBody.current.scrollHeight > refBody.current.offsetHeight) {
      refBody.current.scrollTop = refBody.current.scrollHeight - refBody.current.offsetHeight
    }
  }, [messages])

  return (
    <Container ref={refBody}>
      {messages?.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            message: message.data().message,
            timestamp: message.data().timestamp?.toDate().getTime()
          }}
        />
      ))}
    </Container>
  )
}

export default ChatterBody
