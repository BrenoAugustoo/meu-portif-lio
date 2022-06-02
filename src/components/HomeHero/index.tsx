/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import boyImg from '../../assets/boy.webp';

function HomeHero() {
  return (
    <Container>
      <img src={boyImg} alt="Minha foto" />

      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>bem-vindo(a) ao meu portifólio</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Breno,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Augusto</span>
            </div>
            {'\u007D'}
          </CodeItem>

          <CodeItem>
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">Front-end Developer</span>
            </div>
            <div>
              Empresa: <span className="blue">N/A</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
