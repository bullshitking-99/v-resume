import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface CompanyCardProps {
  company: string;
  department?: string;
  position?: string;
  period: string;
  techStack: string[];
  projects: Array<{
    name: string;
    description?: string;
  }>;
  className?: string;
}

export function CompanyCard({
  company,
  department,
  position,
  period,
  techStack,
  projects,
  className,
}: CompanyCardProps) {
  return (
    <Card className={`p-4 ${className}`}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-base font-medium">{company}</h3>
          <p className="text-sm text-muted-foreground">
            {department}
            {position ? " · " + position : ""}
          </p>
        </div>
        <time className="text-sm text-muted-foreground">{period}</time>
      </div>

      <div className="mb-3">
        <div className="flex flex-wrap gap-1.5 mb-1">
          {techStack.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs font-normal rounded"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex flex-col h-[calc(100%-80px)] justify-between">
        <ul className="text-sm space-y-3">
          {projects.map((project, index) => (
            <li key={index} className="flex flex-col">
              <span>{project.name}</span>
              {project.description && (
                <span className="text-muted-foreground text-sm">
                  {project.description}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
