import { HomeContainer } from '../styles/Home';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import { Experiences } from '../components/Experiences';
import { ProjectsSection } from '../components/Projects';
import { Acquirements } from '../components/Acquirements';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiences />
        <ProjectsSection />
        <Acquirements />
        <Contact />
      </main>
      <Footer />
    </HomeContainer>
  );
}
