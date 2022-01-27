import illustrationImg from '../../assets/images/illustration.svg';
import { StylizedAside } from './styles';

export function Aside() {
  return (
    <StylizedAside>
      <img
        src={illustrationImg}
        alt="Ilustração simbolizando perguntas e respostas"
      />
      <strong>Crie salas de Q&amp;A ao-vivo</strong>
      <p>Tire as dúvidas da sua audiência em tempo-real</p>
    </StylizedAside>
  );
}
