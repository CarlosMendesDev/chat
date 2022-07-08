import React from "react"
import { MdPerson, MdMoreVert, MdSearch } from 'react-icons/md'
import {
  Container,
  UserInfo,
  NameContent,
  Name,
  Avatar,
  Options
} from './styles'

const ChatterHeader = ({ photoURL, name }) => {
  return (
    <Container>
      <UserInfo>
        {photoURL ? <Avatar src={photoURL} alt='Avatar' /> : <MdPerson />}

        <NameContent>
          <Name>{name}</Name>
        </NameContent>
      </UserInfo>

      <Options>
        <MdSearch />
        <MdMoreVert />
      </Options>
    </Container>
  )
}

export default ChatterHeader
