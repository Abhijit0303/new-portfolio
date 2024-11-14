/* eslint-disable react/prop-types */

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About({ about, photoUrl }) {
  const paragraphs = about.split("\n\n").filter((p) => p.trim() !== "");

  return (
    <section className="py-12 sm:py-20 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
        About Me
      </h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        <motion.div
          className="w-full md:w-1/3 mb-6 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/30 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative overflow-hidden rounded-lg border-4 border-primary/20">
              <img
                src={photoUrl}
                alt="Profile"
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>
        <Card className="w-full md:w-2/3">
          <CardContent className="p-4 sm:p-6">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className={`text-sm sm:text-base ${
                  index < paragraphs.length - 1 ? "mb-4" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
