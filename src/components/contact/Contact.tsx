export const Contact = () => {
    return (
        <section id="contact" className="relative w-full min-h-screen">
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
                    </div>
                </div>
            </div>
        </section>
    );
};
