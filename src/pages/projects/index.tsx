import Header from '../../components/Header';
import { ProjectCard } from '../../components/ProjectCard';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

export default function Projects() {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        <ProjectCard
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://www.datocms-assets.com/39397/1614171395-open-graph-logo-large-br.png"
        />
        <ProjectCard
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://www.datocms-assets.com/39397/1614171395-open-graph-logo-large-br.png"
        />
        <ProjectCard
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://www.datocms-assets.com/39397/1614171395-open-graph-logo-large-br.png"
        />
        <ProjectCard
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://www.datocms-assets.com/39397/1614171395-open-graph-logo-large-br.png"
        />
      </main>
    </ProjectsContainer>
  );
}
