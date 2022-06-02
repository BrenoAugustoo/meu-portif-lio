import { ReactNode } from 'react';

import { Container } from './styles';

interface NavSectionTitleProps {
  title: string | ReactNode;
  description?: string | ReactNode;
}

export function NavSectionTitle({ title, description }: NavSectionTitleProps) {
  return (
    <Container>
      <h1># {title}</h1>
      {description && <h2>{description}</h2>}
    </Container>
  );
}
