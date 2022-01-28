import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Aside } from '../../components/Aside';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';
import { Container, Form, MainContent } from './styles';

export function NewRoom() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.collection('rooms');

    const firebaseRoom = await roomRef.add({
      title: newRoom,
      authorId: user?.id,
    });

    navigate(`/admin/rooms/${firebaseRoom.id}`);
  }

  return (
    <Container>
      <Aside />
      <main>
        <MainContent>
          <Logo alignSelf="center" />
          <h2>Criar uma nova sala</h2>
          <Form onSubmit={(event) => handleCreateRoom(event)}>
            <Input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
          </Form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </MainContent>
      </main>
    </Container>
  );
}
