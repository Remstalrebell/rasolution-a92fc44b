import { useState } from "react";
import { Plus, FolderOpen, Users, TrendingUp, Globe, Rocket, Megaphone, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const stats = [
  { label: "Aktive Projekte", value: "12", icon: FolderOpen },
  { label: "Kunden", value: "48", icon: Users },
  { label: "Umsatz (MTD)", value: "€ 4.250", icon: TrendingUp },
];

const projects = [
  { name: "Webdesign Relaunch", icon: Globe, status: "In Bearbeitung", statusColor: "bg-blue-100 text-blue-800", kunde: "Meyer GmbH", progress: 60 },
  { name: "App-Launch", icon: Rocket, status: "Abgeschlossen", statusColor: "bg-green-100 text-green-800", kunde: "TechStart AG", progress: 100 },
  { name: "Social-Media Kampagne", icon: Megaphone, status: "In Bearbeitung", statusColor: "bg-blue-100 text-blue-800", kunde: "BioMarkt KG", progress: 35 },
];

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    console.log("Projekt gespeichert");
    setOpen(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-balance">Dashboard</h1>
        <Button onClick={() => setOpen(true)}>
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
                    <span className="flex items-center gap-2">
                      <p.icon className="h-4 w-4 text-muted-foreground" />
                      {p.name}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={p.statusColor}>
                      {p.status}
                    </Badge>
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

      <Dialog open={open} onOpenChange={setOpen}>
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
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="geplant">Geplant</SelectItem>
                  <SelectItem value="in-bearbeitung">In Bearbeitung</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>Abbrechen</Button>
            <Button onClick={handleSave}>Speichern</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
