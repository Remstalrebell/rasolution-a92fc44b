import { Clock } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

interface Project {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  status: string;
  statusColor: string;
  kunde: string;
  progress: number;
  description: string;
  activities: string[];
}

interface Props {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailSheet = ({ project, onClose }: Props) => (
  <Sheet open={!!project} onOpenChange={(open) => !open && onClose()}>
    <SheetContent className="sm:max-w-md">
      {project && (
        <>
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <project.icon className="h-5 w-5 text-primary" />
              {project.name}
            </SheetTitle>
            <SheetDescription>{project.description}</SheetDescription>
          </SheetHeader>

          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Status</span>
              <Badge variant="secondary" className={project.statusColor}>{project.status}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Kunde</span>
              <span className="text-sm font-medium">{project.kunde}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Fortschritt</span>
              <div className="flex items-center gap-2">
                <Progress value={project.progress} className="h-2 w-24" />
                <span className="text-xs tabular-nums">{project.progress}%</span>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-sm font-semibold mb-3">Letzte Aktivitäten</h3>
              <ul className="space-y-2">
                {project.activities.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary/60" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </SheetContent>
  </Sheet>
);

export default ProjectDetailSheet;
