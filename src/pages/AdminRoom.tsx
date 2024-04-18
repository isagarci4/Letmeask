import { useNavigate, useParams } from 'react-router-dom'

import logoImg from '../assets/images/logo.svg'
import deleteImg from '../assets/images/delete.svg'

import { Button } from '../components/Button'
import { RoomCode } from '../components/RoomCode'

import '../styles/room.scss'
import { Question } from '../components/Question'
import { useRoom } from '../hooks/useRoom'
import { database } from '../services/firebase'
import { ref, remove, update } from 'firebase/database'

export function AdminRoom() {
    const { id } = useParams()
    const { title, questions } = useRoom(id)

    const navigate = useNavigate()

    async function handleEndRoom() {
        const roomRef = ref(database, `rooms/${id}`)
        await update(roomRef, {
            endedAt: new Date()
        })

        navigate('/')
    }

    async function handleDeleteQuestion(questionId: string) {
        if(window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
            const questionRef = ref(database, `rooms/${id}/questions/${questionId}`)
            await remove(questionRef)
        }
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                   <div>
                        {id && <RoomCode code={id} />}
                        <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
                   </div>
                </div>
            </header>

            <main className="content">
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>
                <div className="question-list">
                    {questions.map(question => {
                        return(
                            <Question 
                                key={question.id}
                                content={question.content}
                                author={question.author}
                            >
                                <button
                                    type="button"
                                    onClick={() => handleDeleteQuestion(question.id)}
                                >
                                    <img src={deleteImg} alt="Remover pergunta" />
                                </button>
                            </Question>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}