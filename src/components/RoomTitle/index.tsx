import { Title } from './styles';
import { Question } from '../../hooks/useRoom';

type RoomTitleProps = {
  title: string;
  questions: Question[];
};

export function RoomTitle({ questions, title }: RoomTitleProps) {
  return (
    <Title>
      <h1>Sala {title}</h1>
      {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
    </Title>
  );
}
