import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface OpenSourceCardProps {
  title: string
  url?: string
  period: string
  techStack: string[]
  description: string
  className?: string
}

export function OpenSourceCard({ title, url, period, techStack, description, className }: OpenSourceCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <CardTitle className="text-base">
            {url ? (
              <a href={url} target="_blank" className="hover:underline flex items-center gap-1" rel="noreferrer">
                {title}
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <span className="text-sm text-muted-foreground">{period}</span>
        </div>
        <div className="flex gap-1 mt-1">
          {techStack.map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="text-sm">{description}</CardContent>
    </Card>
  )
}

