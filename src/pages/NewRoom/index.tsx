import { FormEvent, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import LogoImg from '../../assets/images/logo.svg'

import './styles.scss'

import { Button } from '../../components/Button'
import { Aside } from '../../components/Aside'

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

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id
        })

        navigate(`/rooms/${firebaseRoom.key}`)
    }

    return (
        <div id="page-auth">
            <Aside />
            <main>
                <div className='main-content'>
                    <img src={LogoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input 
                            type="text"
                            placeholder='Nome da sala'
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}