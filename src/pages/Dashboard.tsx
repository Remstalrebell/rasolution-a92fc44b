import { useState } from "react";
import { Plus, FolderOpen, Users, TrendingUp, Globe, Rocket, Megaphone, MoreHorizontal, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import ProjectTable from "@/components/dashboard/ProjectTable";
import NewProjectDialog from "@/components/dashboard/NewProjectDialog";
import ProjectDetailSheet from "@/components/dashboard/ProjectDetailSheet";

export const projects = [
  {
    name: "Webdesign Relaunch", icon: Globe, status: "In Bearbeitung",
    statusColor: "bg-primary/10 text-primary",
    kunde: "Meyer GmbH", progress: 60,
    description: "Kompletter Relaunch der Unternehmenswebsite mit neuem Design-System und responsiver Umsetzung.",
    activities: ["Wireframes erstellt", "Design-Review abgeschlossen", "Startseite implementiert"],
  },
  {
    name: "App-Launch", icon: Rocket, status: "Abgeschlossen",
    statusColor: "bg-accent/10 text-accent",
    kunde: "TechStart AG", progress: 100,
    description: "Native App für iOS und Android mit Flutter-Technologie und Backend-Integration.",
    activities: ["App Store Release", "Finale QA bestanden", "Beta-Phase abgeschlossen"],
  },
  {
    name: "Social-Media Kampagne", icon: Megaphone, status: "In Bearbeitung",
    statusColor: "bg-primary/10 text-primary",
    kunde: "BioMarkt KG", progress: 35,
    description: "Multi-Channel Kampagne über Instagram, LinkedIn und Facebook mit Paid-Ads-Strategie.",
    activities: ["Content-Plan erstellt", "Erste Ads geschaltet"],
  },
];

const stats = [
  { label: "Aktive Projekte", value: "12", icon: FolderOpen },
  { label: "Kunden", value: "48", icon: Users },
  { label: "Umsatz (MTD)", value: "€ 4.250", icon: TrendingUp },
];

const Dashboard = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-balance">Dashboard</h1>
        <Button onClick={() => setDialogOpen(true)}>
          <Plus className="h-4 w-4" />
          Neues Projekt
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((s) => (
          <Card key={s.label} className="rounded-xl">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <p className="text-2xl font-bold tracking-tight text-accent">{s.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ProjectTable projects={projects} onSelectProject={setSelectedProject} />
      <ProjectDetailSheet project={selectedProject} onClose={() => setSelectedProject(null)} />
      <NewProjectDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default Dashboard;
