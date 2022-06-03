import Link from 'next/link';
import { NavSectionTitle } from '../NavSectionTitle';
import { ProjectItem } from './ProjectItem';
import { Container } from './styles';

export function ProjectsSection() {
  return (
    <Container>
      <NavSectionTitle title="Últimos Projetos" />

      <section>
        <ProjectItem
          title="Nubank"
          image="https://tecnograna.com.br/wp-content/uploads/2019/07/Nubank.jpg"
          type="Website"
          slug="teste"
        />
        <ProjectItem
          title="Nubank"
          image="https://tecnograna.com.br/wp-content/uploads/2019/07/Nubank.jpg"
          type="Website"
          slug="teste"
        />
        <ProjectItem
          title="Nubank"
          image="https://tecnograna.com.br/wp-content/uploads/2019/07/Nubank.jpg"
          type="Website"
          slug="teste"
        />
      </section>
      <button type="button">
        <Link href="/projects">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
