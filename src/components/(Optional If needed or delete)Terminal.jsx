/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const commands = {
  help: "Available commands: about, education, experience, skills, projects, contact, clear",
  about: "Displays information about me",
  education: "Shows my educational background",
  experience: "Lists my work experience",
  skills: "Displays my technical skills",
  projects: "Shows my projects",
  contact: "Displays my contact information",
  clear: "Clears the terminal",
};

export default function Terminal({ data }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    {
      type: "system",
      content: 'Welcome to my portfolio! Type "help" for a list of commands.',
    },
  ]);
  const inputRef = useRef(null);
  const scrollAreaRef = useRef(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [output]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim().toLowerCase();
    setOutput([...output, { type: "user", content: `$ ${trimmedInput}` }]);

    switch (trimmedInput) {
      case "help":
        setOutput((prev) => [
          ...prev,
          { type: "system", content: commands.help },
        ]);
        break;
      case "about":
        setOutput((prev) => [...prev, { type: "system", content: data.about }]);
        break;
      case "education":
        setOutput((prev) => [
          ...prev,
          {
            type: "system",
            content: data.educations
              .map(
                (edu) =>
                  `${edu.courseName} - ${edu.collegeName} (${edu.period})`
              )
              .join("\n"),
          },
        ]);
        break;
      case "experience":
        setOutput((prev) => [
          ...prev,
          {
            type: "system",
            content: data.experiences
              .map(
                (exp) =>
                  `${exp.role} at ${exp.company} (${
                    exp.period
                  })\n${exp.responsibilities.join("\n")}`
              )
              .join("\n\n"),
          },
        ]);
        break;
      case "skills":
        setOutput((prev) => [
          ...prev,
          {
            type: "system",
            content: data.skills
              .map((skill) => `${skill.name}: ${skill.level}`)
              .join("\n"),
          },
        ]);
        break;
      case "projects":
        setOutput((prev) => [
          ...prev,
          {
            type: "system",
            content: data.projects
              .map(
                (project) =>
                  `${project.title}\nDescription: ${
                    project.description
                  }\nTechnologies: ${project.technologies.join(
                    ", "
                  )}\nGitHub: ${project.github}\nLive Demo: ${project.live}`
              )
              .join("\n\n"),
          },
        ]);
        break;
      case "contact":
        setOutput((prev) => [
          ...prev,
          {
            type: "system",
            content: `GitHub: ${data.socialLinks.github}\nLinkedIn: ${data.socialLinks.linkedin}\nTwitter: ${data.socialLinks.twitter}`,
          },
        ]);
        break;
      case "clear":
        setOutput([]);
        break;
      default:
        setOutput((prev) => [
          ...prev,
          {
            type: "system",
            content: `Command not found: ${trimmedInput}. Type "help" for a list of commands.`,
          },
        ]);
    }

    setInput("");
  };

  return (
    <div className="bg-black text-green-500 p-4 rounded-lg shadow-lg font-mono h-[80vh] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs">{data.name}'s Terminal</div>
      </div>
      <ScrollArea className="flex-grow mb-4" ref={scrollAreaRef}>
        {output.map((line, index) => (
          <div
            key={index}
            className={
              line.type === "user" ? "text-blue-400" : "text-green-500"
            }
          >
            {line.content}
          </div>
        ))}
      </ScrollArea>
      <form onSubmit={handleInputSubmit} className="flex">
        <span className="mr-2">$</span>
        <Input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="flex-grow bg-transparent border-none text-green-500 focus:outline-none"
          ref={inputRef}
        />
        <Button type="submit" className="sr-only">
          Submit
        </Button>
      </form>
    </div>
  );
}
