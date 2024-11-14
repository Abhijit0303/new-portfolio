/* eslint-disable react/prop-types */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Education({ educations = [] }) {
  if (!educations || educations.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <p className="text-center text-muted-foreground">
          No education information available.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
      <div className="space-y-6">
        {educations.map((edu, index) => (
          <Card key={index} className="w-full">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{edu.courseName}</h3>
                  <p className="text-sm text-muted-foreground">
                    {edu.collegeName}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {edu.period}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{edu.place}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
