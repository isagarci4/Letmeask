import { onValue, ref } from "firebase/database"
import { useEffect, useState } from "react"
import { database } from "../services/firebase"

type QuestionType = {
    id: string
    author: {
        name: string
        avatar: string
    }
    content: string
    isAnswered: boolean
    isHighlighted:boolean
}

type FirebaseQuestions = Record<string, {
    author: {
        name: string
        avatar: string
    }
    content: string
    isAnswered: boolean
    isHighlighted:boolean
}>

export function useRoom(roomId: string | undefined) {
    const [questions, setQuestions] = useState<QuestionType[]>([])
    const [title, setTitle] = useState('')

    useEffect(() => {
        const roomRef = ref(database, `rooms/${roomId}`);
    
        // Adicionando um listener para escutar alterações em tempo real
        onValue(roomRef, (snapshot) => {
            if (snapshot.exists()) {
                const databaseRoom = snapshot.val();
                const firebaseQuestions: FirebaseQuestions = databaseRoom.questions || {};
    
                const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                    return {
                        id: key,
                        content: value.content,
                        author: value.author,
                        isHighlighted: value.isHighlighted,
                        isAnswered: value.isAnswered,
                    };
                });
    
                setTitle(databaseRoom.title);
                setQuestions(parsedQuestions);
            } else {
                // A sala não existe ou não foi encontrada
                console.log("Sala não encontrada");
            }
        })
    
    }, [roomId]);

    return { questions, title }
}