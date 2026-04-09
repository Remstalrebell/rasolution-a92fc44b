import { useState } from "react";
import { Plus, FolderOpen, Users, TrendingUp, Globe, Rocket, Megaphone, Leaf, FileDown, Upload, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProjectTable from "@/components/dashboard/ProjectTable";
import NewProjectDialog from "@/components/dashboard/NewProjectDialog";
import ProjectDetailSheet from "@/components/dashboard/ProjectDetailSheet";
import { useToast } from "@/hooks/use-toast";

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
  { label: "CO2-Ersparnis (BEV)", value: "42.5 t", icon: Leaf, green: true },
];

const connectors = [
  { name: "Holman", status: "bereit" },
  { name: "SAP", status: "bereit" },
  { name: "Geotab", status: "bereit" },
  { name: "Arval", status: "bereit" },
];

const Dashboard = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const { toast } = useToast();

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-balance">Dashboard</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => {
            toast({ title: "PDF-Export", description: "Der Bericht wird generiert… (Demo)" });
          }}>
            <FileDown className="h-4 w-4" />
            Bericht als PDF exportieren
          </Button>
          <Button onClick={() => setDialogOpen(true)} size="lg">
            <Plus className="h-4 w-4" />
            Neues Projekt
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <Card key={s.label} className={`rounded-xl shadow-sm hover:shadow-md transition-shadow ${(s as any).green ? 'border-amber-200/50' : ''}`}>
            <CardContent className="p-7 flex items-center gap-5">
              <div className={`rounded-xl p-4 ${(s as any).green ? 'bg-green-500/10' : 'bg-primary/8'}`}>
                <s.icon className={`h-6 w-6 drop-shadow-sm ${(s as any).green ? 'text-green-600' : 'text-amber-600'}`} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{s.label}</p>
                <p className="text-3xl font-extrabold tracking-tight bg-gradient-to-b from-amber-400 to-amber-700 bg-clip-text text-transparent">{s.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Konnektivität & Schnittstellen */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-lg">
            <Wifi className="h-5 w-5 text-amber-600" />
            Konnektivität & Schnittstellen
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-6 mb-6">
            {connectors.map((c) => (
              <div key={c.name} className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 px-5 py-3">
                <span className="font-semibold text-foreground">{c.name}</span>
                <Badge variant="default" className="bg-green-600 hover:bg-green-600 text-white gap-1 text-xs">
                  Bereit für API-Synchronisation
                </Badge>
              </div>
            ))}
          </div>
          <Button variant="outline" onClick={() => {
            toast({ title: "Import-Modul", description: "System bereit für Import (.csv/.xlsx)" });
          }}>
            <Upload className="h-4 w-4" />
            Manueller Daten-Import (.csv/.xlsx)
          </Button>
        </CardContent>
      </Card>

      {/* Demo-Karten */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Flotten-Status */}
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle className="text-lg">Flotten-Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <div className="relative w-40 h-40">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="15.91549" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15.91549" fill="none" stroke="hsl(142 76% 36%)" strokeWidth="3" strokeDasharray="82 18" strokeDashoffset="0" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="15.91549" fill="none" stroke="hsl(45 93% 47%)" strokeWidth="3" strokeDasharray="12 88" strokeDashoffset="-82" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="15.91549" fill="none" stroke="hsl(0 84% 60%)" strokeWidth="3" strokeDasharray="6 94" strokeDashoffset="-94" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-extrabold text-foreground">82%</span>
                  <span className="text-xs text-muted-foreground">Einsatzbereit</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-600" />82% Einsatzbereit</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-500" />12% Werkstatt</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500" />6% Inaktiv</span>
            </div>
          </CardContent>
        </Card>

        {/* Kosteneinsparung */}
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle className="text-lg">Kosteneinsparung 2026</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-6">
            <p className="text-4xl font-extrabold tracking-tight bg-gradient-to-b from-amber-400 to-amber-700 bg-clip-text text-transparent">42.580 €</p>
            <div className="mt-3 flex items-center gap-1 text-green-600 font-semibold text-sm">
              <TrendingUp className="h-4 w-4" />
              +18,3 % ggü. Vorjahr
            </div>
          </CardContent>
        </Card>

        {/* Wichtige Termine */}
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle className="text-lg">Wichtige Termine</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                { date: "15. Mai 2026", label: "HU Lkw-Zentrale" },
                { date: "02. Jun 2026", label: "Leasing-Check PKW-Pool" },
                { date: "19. Jun 2026", label: "Audit-Termin ISO 14001" },
              ].map((t) => (
                <li key={t.label} className="flex items-start gap-3">
                  <Badge variant="outline" className="shrink-0 text-xs">{t.date}</Badge>
                  <span className="text-sm text-foreground">{t.label}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <ProjectTable projects={projects} onSelectProject={setSelectedProject} />
      <ProjectDetailSheet project={selectedProject} onClose={() => setSelectedProject(null)} />
      <NewProjectDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default Dashboard;
