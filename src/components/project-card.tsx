import { Card } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  situation?: string
  task?: string
  action?: string[]
  result?: string[]
  className?: string
}

export function ProjectCard({ title, situation, task, action, result, className }: ProjectCardProps) {
  return (
    <Card className={`p-4 ${className}`}>
      <h3 className="text-base font-medium mb-3">{title}</h3>

      <div className="space-y-3 text-sm">
        {situation && (
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-1">背景</h4>
            <p className="text-muted-foreground">{situation}</p>
          </div>
        )}

        {task && (
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-1">难点</h4>
            <p className="text-muted-foreground">{task}</p>
          </div>
        )}

        {action && action.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-1">执行</h4>
            <ul className="space-y-1.5 text-muted-foreground">
              {action.map((item, index) => (
                <li key={index} className="pl-4 relative">
                  <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {result && result.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-1">成果</h4>
            <ul className="space-y-1.5 text-muted-foreground">
              {result.map((item, index) => (
                <li key={index} className="pl-4 relative">
                  <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  )
}

