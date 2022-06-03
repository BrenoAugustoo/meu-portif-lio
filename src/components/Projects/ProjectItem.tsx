import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjectItemContainer } from './styles';

interface ProjectItemProps {
  title: string;
  type: string;
  slug: string;
  image: string;
}

export function ProjectItem({ title, type, slug, image }: ProjectItemProps) {
  return (
    <ProjectItemContainer imgUrl={image}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/projects/${slug}`}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjectItemContainer>
  );
}
