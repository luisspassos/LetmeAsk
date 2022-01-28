import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { database } from '../services/firebase';
import { useAuth } from './useAuth';

type QuestionData = {
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likes: string[];
};

export type Question = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
};

type RoomData = {
  title: string;
  authorId: string;
};

export function useRoom(roomId: string) {
  const { user } = useAuth();

  const navigate = useNavigate();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [render, setRender] = useState(false);

  function roomDeleted() {
    const roomRef = database.collection('rooms').doc(roomId);

    const unsubscribe = roomRef.onSnapshot((data) => {
      if (!data.exists) {
        navigate('/');
      }
    });
    // ver responsivdade da quantidade de perguntas, DE TUDO
    // ver pwa
    // quando usuario criar a sala, ir direto para a admin
    return () => {
      unsubscribe();
    };
  }

  async function checkIfTheRoomExists() {
    const roomRef = await database.collection('rooms').doc(roomId).get();

    if (!roomRef.exists) {
      navigate('/');
    }

    setRender(true);
  }

  useEffect(() => {
    const roomRef = database.collection('rooms').doc(roomId);

    roomRef.get().then((room) => {
      const roomData = room.data() as RoomData;

      setTitle(roomData.title);
      setAuthorId(roomData.authorId);
    });

    const unsubscribe = roomRef
      .collection('questions')
      .orderBy('timestamp')
      .onSnapshot((room) => {
        const questionsArr = room.docs;

        const parsedQuestions = questionsArr.map((question) => {
          const questionData = question.data() as QuestionData;

          return {
            id: question.id,
            author: questionData.author,
            content: questionData.content,
            isHighlighted: questionData.isHighlighted,
            isAnswered: questionData.isAnswered,
            likeCount: (questionData.likes ?? []).length,
            likeId: (questionData.likes ?? []).find(
              (likeId) => likeId === user?.id
            ),
          };
        });

        setQuestions(parsedQuestions);
      });

    return () => {
      unsubscribe();
    };
  }, [roomId, user?.id]);

  return {
    questions,
    title,
    authorId,
    render,
    checkIfTheRoomExists,
    roomDeleted,
  };
}
