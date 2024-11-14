/* eslint-disable react/prop-types */
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="container ">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <CardContent className="p-6 flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              {/* <Button variant="outline" size="sm" asChild>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button> */}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
