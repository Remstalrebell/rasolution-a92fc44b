import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface Project {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  status: string;
  statusColor: string;
  kunde: string;
  progress: number;
}

interface Props {
  projects: Project[];
  onSelectProject: (p: Project) => void;
}

const ProjectTable = ({ projects, onSelectProject }: Props) => (
  <Card className="rounded-xl">
    <CardHeader>
      <CardTitle className="text-lg">Aktuelle Projekte</CardTitle>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Kunde</TableHead>
            <TableHead>Fortschritt</TableHead>
            <TableHead className="w-10" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((p) => (
            <TableRow key={p.name}>
              <TableCell className="font-medium">
                <button
                  className="flex items-center gap-2 hover:text-primary transition-colors text-left"
                  onClick={() => onSelectProject(p)}
                >
                  <p.icon className="h-4 w-4 text-muted-foreground" />
                  {p.name}
                </button>
              </TableCell>
              <TableCell>
                <Badge variant="secondary" className={p.statusColor}>{p.status}</Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">{p.kunde}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress value={p.progress} className="h-2 w-24" />
                  <span className="text-xs text-muted-foreground tabular-nums">{p.progress}%</span>
                </div>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

export default ProjectTable;
