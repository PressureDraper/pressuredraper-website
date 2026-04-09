import { About } from "@/components/about/About";
import { Home as HomePage } from "@/components/home/Home";

export default function Home() {
    return (
        <>
            <section id="home" className="relative z-0 h-[calc(100vh-4rem)] mt-16 w-full overflow-hidden">
                <HomePage />
            </section>
            <section id="about" className="relative w-full h-screen">
                <About />
            </section>
        </>
    );
}
