import { About } from '@/components/about/About';
import { Home as HomePage } from '@/components/home/Home';
import { Projects } from '@/components/projects/Projects';
import { GSapBackground } from '@/components/UI/GSapBackground';

export default function Home() {
    return (
        <>
            <section id="home" className="relative z-0 min-h-[calc(100vh-4rem)] mt-16 w-full">
                <HomePage />
            </section>
            <div className="w-full h-px bg-linear-to-r from-transparent via-accent-400/40 to-transparent" />
            <div className="relative w-full">
                <GSapBackground />
                <section id="about" className="relative w-full min-h-screen">
                    <About />
                </section>
                <section id="projects" className="relative w-full min-h-screen">
                    <Projects />
                </section>
            </div>
        </>
    );
}
