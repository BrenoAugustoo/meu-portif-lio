import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { NavSectionTitle } from '../NavSectionTitle';
import { AcquirementsItem } from './AcquirementsItem';
import { Container } from './styles';

export function Acquirements() {
  return (
    <Container>
      <NavSectionTitle title="Conhecimentos" />
      <section>
        <AcquirementsItem title="HTML" icon={<AiFillHtml5 />} />
        <AcquirementsItem title="CSS" icon={<FaCss3Alt />} />
        <AcquirementsItem title="JavaScript" icon={<IoLogoJavascript />} />
        <AcquirementsItem title="React" icon={<FaReact />} />
      </section>
    </Container>
  );
}
