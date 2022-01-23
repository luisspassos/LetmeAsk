import { FormEvent, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { Container, Form, MainContent } from './styles'

import { Button } from '../../components/Button'
import { Aside } from '../../components/Aside'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'

import { database } from '../../services/firebase'

import { useAuth } from '../../hooks/useAuth'

export function NewRoom() {

    const { user } = useAuth();
    const navigate = useNavigate()

    const [newRoom, setNewRoom] = useState('')

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if(newRoom.trim() === '') {
            return;
        }

        const roomRef = database.collection('rooms');

        const firebaseRoom = await roomRef.add({
            title: newRoom,
            authorId: user?.id
        })

        navigate(`/rooms/${firebaseRoom.id}`)
    }

    return (
        <Container>
            <Aside />
            <main>
                <MainContent>
                <Logo alignSelf='center'/>
                    <h2>Criar uma nova sala</h2>
                    <Form onSubmit={handleCreateRoom}>
                        <Input
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