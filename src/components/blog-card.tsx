import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface BlogPost {
  title: string;
  url?: string;
}

interface BlogCardProps {
  title: string;
  url?: string;
  period?: string;
  techStack: string[];
  posts: BlogPost[];
  className?: string;
}

export function BlogCard({
  title,
  url,
  period,
  techStack,
  posts,
  className,
}: BlogCardProps) {
  return (
    <Card className={`p-4 ${className}`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-base font-medium">
          <a
            href={url}
            target="_blank"
            className="hover:underline flex items-center gap-1"
            rel="noreferrer"
          >
            {title}
            {url && <ExternalLink className="h-3 w-3" />}
          </a>
        </h3>
        {period && (
          <time className="text-sm text-muted-foreground">{period}</time>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-2">
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

      <ul className="text-sm space-y-1">
        {posts.map((post, index) => (
          <li key={index} className="pl-4 relative">
            <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            {post.url ? (
              <a
                href={post.url}
                target="_blank"
                className="hover:underline text-muted-foreground"
                rel="noreferrer"
              >
                {post.title}
              </a>
            ) : (
              <span className="text-muted-foreground">{post.title}</span>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}
