import React from "react";
import Button from "@/components/Button";
import AnimatedBorderButton from "@/components/AnimatedBorderButton";
import {
    ArrowRight,
    Facebook,
    Github,
    Linkedin,
    ChevronDown,
    Download,
} from "lucide-react";

const DOTS = Array.from({ length: 30 }, (_, id) => ({
    id,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
    animationDelay: `${Math.random() * 5}s`,
}));

const skills = [
    "React",
    "Javascript",
    "Tailwind CSS",
    "Python",
    "HTML",
    "CSS",
    "TypeScript",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "scikit-learn",
    "Git/GitHub",
    "Figma"
];

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="hero-bg.jpg"
                    alt="hero image"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
            </div>

            {/* Green Dots for decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {DOTS.map((dot) => (
                    <div
                        key={dot.id}
                        className="absolute size-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: dot.left,
                            top: dot.top,
                            animation: dot.animation,
                            animationDelay: dot.animationDelay,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Col - Text content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                Computer Science Student • AI & Web Development
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in leading-tight animation-delay-100">
                                Building{" "}
                                <span className="text-primary glow-text">
                                    digital
                                </span>
                                <br />
                                products with
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    clarity and precision.
                                </span>
                            </h1>

                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hi, I’m Pham Tuan Anh — a Computer Science
                                student at HCMUT. I focus on AI engineer and
                                fullstack web development, and I learn by
                                shipping real projects: research team websites,
                                student apps, and clean UI components.
                            </p>
                        </div>

                        {/* Call to action button */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <a href="#contact">
                                <Button size="lg">
                                    Contact me{" "}
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </a>

                            <a
                                href="Tuan_Anh_Resume.pdf"
                                download="Pham Tuan Anh's resume"
                            >
                                <AnimatedBorderButton>
                                    <Download className="w-5 h-5" />
                                    Download CV
                                </AnimatedBorderButton>
                            </a>
                        </div>

                        {/* Social links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="tet-sm text-muted-foreground">
                                Follow me:{" "}
                            </span>
                            {[
                                {
                                    icon: Github,
                                    href: "https://github.com/PTAxHVA?tab=repositories",
                                },
                                {
                                    icon: Facebook,
                                    href: "https://www.facebook.com/pham.tuan.anh.767010",
                                },
                                {
                                    icon: Linkedin,
                                    href: "https://www.linkedin.com/in/ph%E1%BA%A1m-tu%E1%BA%A5n-anh-1513b2392/",
                                },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Col - Profile image */}
                    <div className="relative animate-fade-in animation-delay-100">
                        {/* Profile image */}
                        <div className="relative max-w-md mx-auto lg:mr-0">
                            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"></div>
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img
                                    src="
                                /profile-photo.jpg"
                                    alt="Pham Tuan Anh"
                                    className="w-full aspect-4/5 object-cover rounded-2xl"
                                />

                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-sm font-medium">
                                            Available for internships /
                                            part-time roles
                                        </span>
                                    </div>
                                </div>

                                {/* Stats Badge */}
                                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                    <div className="text-xl font-normal text-primary italic">
                                        Student
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Open to internships
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">
                        Technologies I work with
                    </p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, index) => (
                                <div key={index} className="shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
            >
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                    <span className="text-xs uppercase tracking-wider">
                        Scroll
                    </span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
