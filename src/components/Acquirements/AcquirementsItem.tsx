import { ReactNode } from 'react';
import { AcquirementsContainer } from './styles';

interface AcquirementsItemProps {
  title: string;
  icon: ReactNode;
}

export function AcquirementsItem({ title, icon }: AcquirementsItemProps) {
  return (
    <AcquirementsContainer>
      <p>{title}</p>
      {icon}
    </AcquirementsContainer>
  );
}
