/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

export default function Skills({ skills }) {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillCards = skillsRef.current.querySelectorAll(".skill-card");
    skillCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="container py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div
        ref={skillsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((skill, index) => (
          <Card
            key={skill.name}
            className="skill-card overflow-hidden transition-transform hover:scale-105 opacity-0"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6 flex justify-between items-center">
              <span className="text-lg font-semibold">{skill.name}</span>
              {/* <img src={skill.logo} /> */}
              {/* It's for Badge  */}
              {/* <Badge variant={getBadgeVariant(skill.level)}>
                {skill.level}
              </Badge> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

// function getBadgeVariant(level) {
//   switch (level) {
//     case "Advanced":
//       return "default";
//     case "Intermediate":
//       return "secondary";
//     case "Beginner":
//       return "outline";
//     default:
//       return "default";
//   }
// }
