import { useState, useEffect } from "react";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MouseEffects from "./components/MouseEffects";
import Loading from "./components/Loading";
import AnimatedSection from "./components/AnimatedSection";
import { data } from "./cms/data";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    setTimeout(() => setLoading(false), 2000);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (loading) return <Loading />;

  return (
    <ThemeProvider defaultTheme={theme} storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5" />
        </div>
        <MouseEffects />
        <Navbar toggleTheme={toggleTheme} logo={data.logo} />
        <main className="relative z-10">
          <AnimatedSection>
            <section id="hero">
              <Hero
                name={data.name}
                role={data.role}
                description={data.description}
                githubUrl={data.socialLinks.github}
                resumeUrl={data.resumeUrl}
              />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section id="about">
              <About about={data.about} photoUrl={data.photoUrl} />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section id="education">
              <Education educations={data.educations} />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section id="experience">
              <Experience experiences={data.experiences} />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section id="skills">
              <Skills skills={data.skills} />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section id="projects">
              <Projects projects={data.projects} />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section id="contact">
              <Contact socialLinks={data.socialLinks} />
            </section>
          </AnimatedSection>
        </main>
        <Footer name={data.name} socialLinks={data.socialLinks} />
      </div>
    </ThemeProvider>
  );
}

// import { useState, useEffect } from "react";
// import { ThemeProvider } from "./components/theme-provider";
// import Terminal from "./components/Terminal";
// import Loading from "./components/Loading";
// import { data } from "./cms/data";

// export default function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 2000);
//   }, []);

//   if (loading) return <Loading />;

//   return (
//     <ThemeProvider defaultTheme="dark">
//       <div className="min-h-screen bg-black flex items-center justify-center p-4">
//         <Terminal data={data} />
//       </div>
//     </ThemeProvider>
//   );
// }
