import { NavSectionTitle } from '../NavSectionTitle';
import { Form } from './Form';
import { Container } from './styles';

export function Contact() {
  return (
    <Container>
      <NavSectionTitle
        title={
          <>
            Precisa dos
            <br />
            meus serviços?
          </>
        }
        description={
          <>
            Preencha o formulário abaixo que
            <br />
            Irei retornar em breve
          </>
        }
      />
      <Form />
    </Container>
  );
}
