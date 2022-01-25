import { useEffect, useState } from "react"

import { database } from "../services/firebase"

import { useAuth } from "./useAuth";

type QuestionData = {
  author: {
    name: string,
    avatar: string
  },
  content: string,
  isAnswered: boolean,
  isHighlighted: boolean,
  likes: string[]
};

export type Question = {
  id: string,
  author: {
    name: string,
    avatar: string
  },
  content: string,
  isAnswered: boolean,
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
}

type RoomData = {
  title: string;
  authorId: string;
}

export function useRoom(roomId: string) {
  const { user } = useAuth()
  const [questions, setQuestions] = useState<Question[]>([])
  const [title, setTitle] = useState('')
  const [authorId, setAuthorId] = useState('');

  async function getData() {
    const roomRef = database.collection('rooms').doc(roomId)

    const roomData = (await roomRef.get()).data() as RoomData
    setTitle(roomData.title)
    setAuthorId(roomData.authorId)

    const unsubscribe = roomRef.collection('questions').orderBy("timestamp").onSnapshot(room => {

      const questionsArr = room.docs

      const parsedQuestions = questionsArr.map(question => {

        const questionData = question.data() as QuestionData

        return {
          id: question.id,
          author: questionData.author,
          content: questionData.content,
          isHighlighted: questionData.isHighlighted,
          isAnswered: questionData.isAnswered,
          likeCount: (questionData.likes ?? []).length,
          likeId: (questionData.likes ?? []).find(likeId => likeId === user?.id)
        }

      })

      setQuestions(parsedQuestions)

    })

    return () => {
      unsubscribe()
    }
  }

  useEffect(() => {
    getData()
  }, [roomId, user?.id])

  return { questions, title, authorId }

}