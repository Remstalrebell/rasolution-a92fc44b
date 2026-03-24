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

const stats = [
  { label: "Aktive Projekte", value: "12", icon: FolderOpen },
  { label: "Kunden", value: "48", icon: Users },
  { label: "Umsatz (MTD)", value: "€ 4.250", icon: TrendingUp },
];

const projects = [
  {
    name: "Webdesign Relaunch", icon: Globe, status: "In Bearbeitung",
    statusColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    kunde: "Meyer GmbH", progress: 60,
    description: "Kompletter Relaunch der Unternehmenswebsite mit neuem Design-System und responsiver Umsetzung.",
    activities: ["Wireframes erstellt", "Design-Review abgeschlossen", "Startseite implementiert"],
  },
  {
    name: "App-Launch", icon: Rocket, status: "Abgeschlossen",
    statusColor: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
    kunde: "TechStart AG", progress: 100,
    description: "Native App für iOS und Android mit Flutter-Technologie und Backend-Integration.",
    activities: ["App Store Release", "Finale QA bestanden", "Beta-Phase abgeschlossen"],
  },
  {
    name: "Social-Media Kampagne", icon: Megaphone, status: "In Bearbeitung",
    statusColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    kunde: "BioMarkt KG", progress: 35,
    description: "Multi-Channel Kampagne über Instagram, LinkedIn und Facebook mit Paid-Ads-Strategie.",
    activities: ["Content-Plan erstellt", "Erste Ads geschaltet"],
  },
];

const Dashboard = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
                <p className="text-2xl font-bold tracking-tight">{s.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

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
                      onClick={() => setSelectedProject(p)}
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

      {/* Projekt-Detail Sheet */}
      <Sheet open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <SheetContent className="sm:max-w-md">
          {selectedProject && (
            <>
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <selectedProject.icon className="h-5 w-5 text-primary" />
                  {selectedProject.name}
                </SheetTitle>
                <SheetDescription>{selectedProject.description}</SheetDescription>
              </SheetHeader>

              <div className="space-y-6 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <Badge variant="secondary" className={selectedProject.statusColor}>{selectedProject.status}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Kunde</span>
                  <span className="text-sm font-medium">{selectedProject.kunde}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Fortschritt</span>
                  <div className="flex items-center gap-2">
                    <Progress value={selectedProject.progress} className="h-2 w-24" />
                    <span className="text-xs tabular-nums">{selectedProject.progress}%</span>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-sm font-semibold mb-3">Letzte Aktivitäten</h3>
                  <ul className="space-y-2">
                    {selectedProject.activities.map((a, i) => (
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

      {/* Neues Projekt Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Neues Projekt erstellen</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="name">Projektname</Label>
              <Input id="name" placeholder="z.B. Website Relaunch" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="kunde">Kunde</Label>
              <Input id="kunde" placeholder="Firmenname" />
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Select defaultValue="geplant">
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="geplant">Geplant</SelectItem>
                  <SelectItem value="in-bearbeitung">In Bearbeitung</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Abbrechen</Button>
            <Button onClick={() => { console.log("Projekt gespeichert"); setDialogOpen(false); }}>Speichern</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
