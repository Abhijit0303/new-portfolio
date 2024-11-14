/* eslint-disable react/prop-types */
// import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
export default function Footer({ socialLinks }) {
  return (
    <footer className="bg-background/80 backdrop-blur-sm py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          © 2024 Abhijit. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open(socialLinks.github, "_blank")}
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open(socialLinks.linkedin, "_blank")}
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open(socialLinks.twitter, "_blank")}
            aria-label="Twitter"
          >
            <FaXTwitter className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
