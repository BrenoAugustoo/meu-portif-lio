import Header from '../../../components/Header';
import ProjectBanner from '../../../components/ProjectBanner';
import { ProjectContainer } from './styles';

export default function Project() {
  return (
    <ProjectContainer>
      <Header />
      <ProjectBanner
        title="Projeto 01"
        type="Website"
        imgUrl="https://www.datocms-assets.com/39397/1614171395-open-graph-logo-large-br.png"
      />
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, facilis
          enim. Ipsa dignissimos excepturi tempora inventore, quaerat sapiente,
          esse, deleniti voluptates odio ad incidunt corrupti?
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}
