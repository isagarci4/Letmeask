import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateRoomButton, MainContent, PageAuth, Separator } from "./styles";

import { database } from "../../services/firebase";
import { get, ref } from "firebase/database";

import { Button } from '../../components/Button/index'
import { useAuth } from "../../hooks/useAuth";

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'

export function Home() {
    const navigate = useNavigate()
    const { user, signInWithGoogle } = useAuth()
    const [roomCode, setRoomCode] = useState('')
    
    async function handleCreateRoom() {
        if(!user) {
            await signInWithGoogle()
        }

        navigate("/rooms/new")
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault()

        if (roomCode.trim() === '') {
            return
        }  

        const roomRef = ref(database, `rooms/${roomCode}`)

        const roomData = await get(roomRef)

        if(!roomData.exists()){
            alert("Room does not exists")
            return
        }

        if (roomData.val().endedAt){
            alert('Room already closed')
            return
        }

        navigate(`/rooms/${roomCode}`)
    }

    return(
        <PageAuth>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e responstas" />
                <strong>Crie salas de Q&amp;A ao-vivo.</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <MainContent>
                    <img src={logoImg} alt="Letmeask" />
                    <CreateRoomButton onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </CreateRoomButton>
                    <Separator>ou entre em uma sala</Separator>
                    <form onSubmit={handleJoinRoom}>
                        <input 
                            type="text" 
                            placeholder="Digite o código da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />        
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </MainContent>
            </main>
        </PageAuth>
    )
}