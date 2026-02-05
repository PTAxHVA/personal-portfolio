import React from "react";
import Navbar from "@/layout/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from "@/layout/Footer";

const App = () => {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <Navbar></Navbar>
            <main>
                <Hero></Hero>
                <About></About>
                <Projects></Projects>
                <Experience></Experience>
                <Testimonials></Testimonials>
                <Contact></Contact>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default App;
