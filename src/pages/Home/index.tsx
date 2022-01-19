import { FormEvent, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import LogoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'

import './styles.scss'

import { Button } from '../../components/Button'
import { Aside } from '../../components/Aside'

import { useAuth } from '../../hooks/useAuth'

import { database } from '../../services/firebase'

export function Home() {
    
    const navigate = useNavigate();
    const { user, signInWithGoogle } = useAuth();

    const [roomCode, setRoomCode] = useState('');

    async function handleCreateRoom() {
        if(!user) {
            await signInWithGoogle()
        }

        navigate('/rooms/new')
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault()

        if(roomCode.trim() === '') {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if(!roomRef.exists()) {
            alert('Room does not exists.')
            return
        }

        if(roomRef.val().endedAt) {
            alert('Room already closed.');
            return
        }

        navigate(`/rooms/${roomCode}`)
    }

    return (
        <div id="page-auth">
            <Aside />
            <main>
                <div className='main-content'>
                    <img src={LogoImg} alt="Letmeask" />
                    <Button onClick={handleCreateRoom} className='create-room'>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </Button>
                    <div className="separator">ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input 
                            type="text"
                            placeholder='Digite o código da sala'
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}