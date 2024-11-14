/* eslint-disable react/prop-types */
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";

export default function Contact({ socialLinks }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
      <Card className="w-full">
        <CardContent className="p-6">
          <p className="text-center mb-6">
            Feel free to reach out to me on any of these platforms:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="mr-2 h-5 w-5" />
                X.com
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
