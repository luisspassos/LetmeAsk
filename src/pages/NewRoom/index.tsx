import { FormEvent, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import LogoImg from '../../assets/images/logo.svg'
import LogoDarkImg from '../../assets/images/logo_dark.svg'

import { Container, Form, MainContent } from './styles'

import { Button } from '../../components/Button'
import { Aside } from '../../components/Aside'

import { database } from '../../services/firebase'

import { useAuth } from '../../hooks/useAuth'
import { useTheme } from '../../hooks/useTheme'

export function NewRoom() {
    const [theme] = useTheme()

    const { user } = useAuth();
    const navigate = useNavigate()

    const [newRoom, setNewRoom] = useState('')

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if(newRoom.trim() === '') {
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id
        })

        navigate(`/rooms/${firebaseRoom.key}`)
    }

    return (
        <Container>
            <Aside />
            <main>
                <MainContent>
                <img src={theme.state.title === 'dark' ? LogoDarkImg : LogoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <Form onSubmit={handleCreateRoom}>
                        <input 
                            type="text"
                            placeholder='Nome da sala'
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </Form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
                    </p>
                </MainContent>
            </main>
        </Container>
    )
}