import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom'

import deleteImg from '../../assets/images/delete.svg'
import checkImg from '../../assets/images/check.svg'
import answerImg from '../../assets/images/answer.svg'

import { Button } from '../../components/Button';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';
import { Switcher } from '../../components/Switcher';
import { Logo } from '../../components/Logo';
import { RoomTitle } from '../../components/RoomTitle';
import { QuestionList } from '../../components/QuestionList';

import { useRoom } from '../../hooks/useRoom';

import { Header, Main } from './styles';

import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';

type RoomParams = {
  id: string;
}

// ver regras do firebase
// ver visualização do botao de encerrar a sala
// ver as cores

export function AdminRoom() {

  const navigate = useNavigate()
  const params = useParams() as RoomParams
  const roomId = params.id;

  const { user } = useAuth() 

  const { title, questions, authorId } = useRoom(roomId)

  const [releaseAdminRoles, setReleaseAdminRoles] = useState(false);

  useEffect(() => {

    const checkIsAdmin = user?.id === authorId;

    if(authorId !== '' && !checkIsAdmin) {
      navigate(`/rooms/${roomId}`)
    }

    setReleaseAdminRoles(true)

  }, [authorId])

  const questionsRef = database.collection('rooms').doc(roomId).collection('questions')

  async function handleEndRoom() {
  
    await database.collection('rooms').doc(roomId).update({
      endedAt: new Date()
    })

    navigate('/')
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await questionsRef.doc(questionId).delete()
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await questionsRef.doc(questionId).update({
      isAnswered: true
    })
  }

  async function handleHighlightQuestion(questionId: string) {
    await questionsRef.doc(questionId).update({
      isHighlighted: true
    })
  }

  return (
    <div>
      <Header>
        <div className="content">
          <Logo maxHeight={45} className='itsInTheRoom'/>
          <div>
            <RoomCode code={roomId} />
            {releaseAdminRoles && <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>}
            <Switcher />
          </div>
        </div>
      </Header>

      <Main>
        <RoomTitle questions={questions} title={title}/>
        <QuestionList>
          {questions.map(question => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isHighlighted={question.isHighlighted}
                isAnswered={question.isAnswered}
              >
                {!question.isAnswered && 
                  (
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
                  )
                }
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover pergunta" />
                </button>
              </Question>
            )
          })}
        </QuestionList>
      </Main>
    </div>
  )
}