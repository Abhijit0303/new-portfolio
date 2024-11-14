/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function Hero({
  name,
  role,
  description,
  githubUrl,
  resumeUrl,
}) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < name.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + name[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, name]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-12 sm:py-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
        {displayText}
        <span className="animate-pulse">|</span>
      </h1>
      <p
        className="text-xl sm:text-2xl md:text-3xl text-primary mb-3 sm:mb-4 animate-fadeIn opacity-0"
        style={{ animationDelay: "1s", animationFillMode: "forwards" }}
      >
        {role}
      </p>
      <p
        className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto animate-fadeIn opacity-0"
        style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
      >
        {description}
      </p>
      <div
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeIn opacity-0"
        style={{ animationDelay: "2s", animationFillMode: "forwards" }}
      >
        <Button
          size="lg"
          className="group w-full sm:w-auto"
          onClick={() => window.open(githubUrl, "_blank")}
        >
          View My Work
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="group w-full sm:w-auto"
          onClick={() => window.open(resumeUrl, "_blank")}
        >
          Download Resume
          <Download className="ml-2 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
