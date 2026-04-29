import { ParticlesBackground } from "../UI/ParticlesBackground";

export const Contact = () => {
    return (
        <section id="contact" className="relative w-full min-h-screen">
            <ParticlesBackground particleCount={100} />
            <div className="min-h-screen flex items-center mx-auto lg:px-0 xxs:py-40 lg:py-24">
                <div className="flex flex-col gap-10 max-w-5xl md:max-w-5xl lg:max-w-6xl xl:max-w-6xl mx-auto justify-items-start px-8 md:px-10 lg:px-10 xl:px-0">
                    <div className="flex flex-col gap-6">
                        <span className="text-primary-400 font-display tracking-widest flex justify-center">
                            Contact
                        </span>
                        <h2 className="text-neutral-100 text-3xl md:text-4xl font-bold font-display text-center flex justify-center">
                            Let's build something great
                        </h2>
                        <p className="w-full text-neutral-400 max-w-3xl text-lg font-body leading-relaxed text-center flex justify-center">
                            I'm open to full-time roles, contract work, and interesting
                            collaborations. Working remotely worldwide. If you're looking for an
                            engineer who cares about quality.
                        </p>
                        <a href="mailto:rojeru.san1983@gmail.com" target="_blank" className="mx-auto rounded-full" aria-label="Get in Touch">
                            <button className="bg-transparent hover:bg-primary-600/20 border-b border-primary-400 text-primary-100 font-bold font-body py-3 px-6 rounded-full transition-colors duration-300 mx-auto cursor-pointer flex items-center gap-2">
                                Get in Touch
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizontal-icon lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" /><path d="M6 12h16" /></svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
