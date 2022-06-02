import { NavSectionTitle } from '../NavSectionTitle';
import { ExperienceItem } from './ExperienceItem';
import { Container } from './styles';

export function Experiences() {
  return (
    <Container>
      <NavSectionTitle title="03 anos" description="de experiência" />

      <section>
        <ExperienceItem
          year="2021"
          title="Dev front-end"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        />
        <ExperienceItem
          year="2021"
          title="Dev front-end"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        />
        <ExperienceItem
          year="2021"
          title="Dev front-end"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        />
        <ExperienceItem
          year="2021"
          title="Dev front-end"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        />
      </section>
    </Container>
  );
}
