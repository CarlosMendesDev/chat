import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from './services/firebase'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Chatter from './components/Chatter'
import { Container } from './styles/app'

const App = () => {
  const [user, loading] = useAuthState(auth)
  const [userChat, setUserChat] = useState(null)

  useEffect(() => {
    if (user) {
      db.collection('users').doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL
      })
    }
  }, [user])

  if (loading) return <div>Loading...</div>

  if (!user) return <Login />

  return (
    <Container>
      <Sidebar setUserChat={setUserChat} userChat={userChat} />
      <Chatter userChat={userChat} />
    </Container>
  )
}

export default App
