import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import React from "react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
            "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
            "Responsive UI and practical optimizations for smoother UX.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
            "Comfortable working in teams — meetings, task split, and feedback loops.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Strong self-learning habit through projects and weekly practice.",
    },
];

const About = () => {
    return (
        <section id="about" className="relative py-32 px-6 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="uppercase text-secondary-foreground text-sm font-medium tracking-wider">
                                About me
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl leading-tight font-bold animate-fade-in delay-100 text-secondary-foreground">
                            Building the future,
                            <span className="text-white font-serif italic font-normal">
                                {" "}
                                one component at a time
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I’m a Computer Science student at HCMUT with a
                                focus on AI engineer and fullstack development.
                                I enjoy turning ideas into clean, responsive
                                interfaces — from research group websites to
                                student web apps.
                            </p>
                            <p>
                                In my research group, I’ve contributed to UI
                                development, dataset labeling (Label Studio),
                                and academic report formatting support. I value
                                readable code, simple UX, and steady iteration.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring
                                new technologies, contributing to open-source
                                projects, or sharing knowledge with the
                                developer community.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                “My goal is to build simple, reliable products —
                                and improve them through feedback and real use.”
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="grid sm:gird-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{
                                    animationDelay: `${(idx + 1) * 100}ms`,
                                }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex justify-center items-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"></item.icon>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
