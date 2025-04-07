import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface PersonalProjectCardProps {
  title: string
  url?: string
  period?: string
  techStack: string[]
  description: string
  className?: string
}

export function PersonalProjectCard({
  title,
  url,
  period,
  techStack,
  description,
  className,
}: PersonalProjectCardProps) {
  return (
    <Card className={`p-4 ${className}`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-base font-medium">
          {url ? (
            <a href={url} target="_blank" className="hover:underline flex items-center gap-1" rel="noreferrer">
              {title}
              <ExternalLink className="h-3 w-3" />
            </a>
          ) : (
            title
          )}
        </h3>
        {period && <time className="text-sm text-muted-foreground">{period}</time>}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-2">
        {techStack.map((tech, index) => (
          <Badge key={index} variant="secondary" className="text-xs font-normal rounded">
            {tech}
          </Badge>
        ))}
      </div>

      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  )
}

