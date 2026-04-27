import { About } from '@/components/about/About';
import { Home as HomePage } from '@/components/home/Home';
import { Projects } from '@/components/projects/Projects';
import { Skills } from '@/components/skills/Skills';
import { Contact } from '../components/contact/Contact';

export default function Home() {
    return (
        <>
            <HomePage />
            <div className="w-full h-px bg-linear-to-r from-transparent via-accent-400/40 to-transparent" />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </>
    );
}
