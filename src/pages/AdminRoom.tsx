import { FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'

import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'
import { RoomCode } from '../components/RoomCode'

import { useAuth } from '../hooks/useAuth'

import '../styles/room.scss'
import { database } from '../services/firebase'
import { push, ref, set } from 'firebase/database'
import { Question } from '../components/Question'
import { useRoom } from '../hooks/useRoom'

export function AdminRoom() {
    const { user } = useAuth()
    const { id } = useParams()
    const [newQuestion, setNewQuestion] = useState('')
    const { title, questions } = useRoom(id)

    async function handleSendQuestion(event: FormEvent) {
        event.preventDefault()

        if (newQuestion.trim() === '') {
            return
        }
        
        if (!user) {
            throw new Error('You must be logged in')
        }

        const question = {
            content: newQuestion,
            author: {
                name: user.name,
                avatar: user.avatar
            }, 
            isHighlighted: false,
            isAnswered: false
        }

        
        const questionRef = ref(database, `rooms/${id}/questions`);
        const newQuestionRef = push(questionRef);
        await set(newQuestionRef,  question);

        setNewQuestion('')
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                   <div>
                        {id && <RoomCode code={id} />}
                        <Button isOutlined>Encerrar sala</Button>
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
                            />
                        )
                    })}
                </div>
            </main>
        </div>
    )
}