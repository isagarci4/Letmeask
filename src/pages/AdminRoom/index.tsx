import { useNavigate, useParams } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import deleteImg from '../../assets/images/delete.svg'
import checkImg from "../../assets/images/check.svg";
import answerImg from '../../assets/images/answer.svg'

import { Button } from '../../components/Button/index'
import { RoomCode } from '../../components/RoomCode'

import { Question } from '../../components/Question/index'
import { useRoom } from '../../hooks/useRoom'
import { database } from '../../services/firebase'
import { ref, remove, update } from 'firebase/database'
import { PageRoom } from '../Room/styles';
import { AdminHeader, AdminHeaderDiv, DivCode, DivLogo } from './styles';
import { Warning } from '../../components/Warning';
import { Moon, Sun } from '@phosphor-icons/react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export function AdminRoom() {
    const { theme, toggleTheme } = useContext(ThemeContext)
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

    async function handleCheckQuestionAsAnswered(questionId: string) {
        const questionRef = ref(database, `rooms/${id}/questions/${questionId}`)
            await update(questionRef, {
                isAnswered: true
            })
    }

    async function handleHighlightQuestion(questionId: string) {
        const questionRef = ref(database, `rooms/${id}/questions/${questionId}`)
            await update(questionRef, {
                isHighlighted: true
            })
    }

    return (
        <PageRoom>
            <AdminHeader>
                <AdminHeaderDiv>
                    <DivLogo>
                        <img src={logoImg} alt="Letmeask" />
                        {theme ? (
                            <button onClick={toggleTheme}>
                                <Moon size={28} />
                            </button>
                        ) : (                        
                            <button onClick={toggleTheme}>
                                <Sun size={28} />
                            </button>
                        )}
                    </DivLogo>
                   <DivCode>
                        {id && <RoomCode code={id} />}
                        <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
                   </DivCode>
                </AdminHeaderDiv>
            </AdminHeader>

            <main className="content">
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>
                <div className="question-list">
                    {questions.length === 0 && (
                        <Warning content="Envie o código desta sala para seus amigos e comece a responder perguntas!"/>
                    )}
                    {questions.map(question => {
                        return(
                            <Question 
                                key={question.id}
                                content={question.content}
                                author={question.author}
                                isAnswered={question.isAnswered}
                                isHighlighted={question.isHighlighted}
                            >
                                
                                {!question.isAnswered && (
                                   <>
                                     <button
                                        type="button"
                                        onClick={() => handleCheckQuestionAsAnswered(question.id)}
                                    >
                                        <img src={checkImg} alt="Marcar pergunta como respondida" />
                                     </button>
                                    <button
                                        type="button"
                                        onClick={() => handleHighlightQuestion(question.id)}
                                    >
                                        <img src={answerImg} alt="Dar destaque à pergunta" />
                                    </button>
                                   </>
                                )}
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
        </PageRoom>
    )
}