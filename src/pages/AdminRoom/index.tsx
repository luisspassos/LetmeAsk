import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import answerImg from '../../assets/images/answer.svg';
import checkImg from '../../assets/images/check.svg';
import deleteImg from '../../assets/images/delete.svg';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { Question } from '../../components/Question';
import { QuestionList } from '../../components/QuestionList';
import { RoomCode } from '../../components/RoomCode';
import { RoomTitle } from '../../components/RoomTitle';
import { Switcher } from '../../components/Switcher';
import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';
import { Header, Main } from './styles';

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const navigate = useNavigate();
  const params = useParams() as RoomParams;
  const roomId = params.id;

  const {
    title,
    questions,
    authorId,
    checkIfTheRoomExists,
    render,
    roomDeleted,
  } = useRoom(roomId);

  useEffect(roomDeleted, []);

  const { user } = useAuth();

  const [releaseAdminRoles, setReleaseAdminRoles] = useState(false);

  useEffect(() => {
    checkIfTheRoomExists();
  }, []);

  useEffect(() => {
    const checkIsAdmin = user?.id === authorId;

    if (authorId !== '') {
      if (!checkIsAdmin) {
        navigate(`/rooms/${roomId}`);
      } else {
        setReleaseAdminRoles(true);
      }
    }
  }, [authorId]);

  const questionsRef = database
    .collection('rooms')
    .doc(roomId)
    .collection('questions');

  async function handleEndRoom() {
    await database.collection('rooms').doc(roomId).delete();

    navigate('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    // eslint-disable-next-line no-alert
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await questionsRef.doc(questionId).delete();
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await questionsRef.doc(questionId).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await questionsRef.doc(questionId).update({
      isHighlighted: true,
    });
  }

  return render ? (
    <div>
      <Header>
        <div className="content">
          <Logo maxHeight={45} className="itsInTheRoom" />
          <div>
            <RoomCode code={roomId} />
            {releaseAdminRoles && (
              <Button isOutlined onClick={() => handleEndRoom()}>
                Encerrar sala
              </Button>
            )}
            <Switcher />
          </div>
        </div>
      </Header>

      <Main>
        <RoomTitle questions={questions} title={title} />
        <QuestionList>
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isHighlighted={question.isHighlighted}
                isAnswered={question.isAnswered}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img
                        src={checkImg}
                        alt="Marcar pergunta como respondida"
                      />
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
            );
          })}
        </QuestionList>
      </Main>
    </div>
  ) : (
    <div />
  );
}
