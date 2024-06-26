import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { push, ref, set } from "firebase/database";

import { MainContent, PageAuth } from "../Home/styles";

import { Button } from '../../components/Button/index'
import { useAuth } from "../../hooks/useAuth";

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'

import { database } from "../../services/firebase";

export function NewRoom() {
    const { user } = useAuth()
    const navigate = useNavigate()
    const [newRoom, setNewRoom] = useState('')

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault()

        if (newRoom.trim() === '') {
            return
        }

        const roomsRef = ref(database, 'rooms'); // Referência à coleção "rooms"

        // Adiciona uma nova sala usando push
        const newRoomRef = push(roomsRef);

        // Define os dados da nova sala na referência gerada
        await set(newRoomRef,  {
            title: newRoom,
            authorId: user?.id,
        });

        navigate(`/admin/rooms/${newRoomRef.key}`)
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
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input 
                            type="text" 
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />        
                        <Button type="submit">
                        Criar sala
                        </Button>                
                    </form>

                    <p>
                        Quer entrar em uma sala existente? <Link to={"/"}>clique aqui</Link>
                    </p>
                </MainContent>
            </main>
        </PageAuth>
    )
}
