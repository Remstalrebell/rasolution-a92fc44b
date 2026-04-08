import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const MAINTENANCE_KEY = "rasolution_maintenance";

const AdminControl = () => {
  const [active, setActive] = useState(() => localStorage.getItem(MAINTENANCE_KEY) === "true");

  useEffect(() => {
    localStorage.setItem(MAINTENANCE_KEY, String(active));
  }, [active]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md w-full mx-4 space-y-8">
        <Button variant="ghost" asChild>
          <Link to="/"><ArrowLeft className="h-4 w-4 mr-2" /> Zurück</Link>
        </Button>

        <div className="rounded-2xl border border-border bg-card p-10 text-center space-y-8 shadow-lg">
          <ShieldAlert className="h-12 w-12 text-primary mx-auto" />
          <h1 className="text-2xl font-bold text-foreground">Wartungsmodus</h1>

          <div className="flex items-center justify-center gap-4">
            <Label htmlFor="maintenance-toggle" className="text-lg font-medium text-muted-foreground">
              {active ? "Aktiv" : "Inaktiv"}
            </Label>
            <Switch
              id="maintenance-toggle"
              checked={active}
              onCheckedChange={setActive}
              className="scale-150"
            />
          </div>

          <p className="text-sm text-muted-foreground">
            {active
              ? "Die Website ist für Besucher gesperrt."
              : "Die Website ist öffentlich erreichbar."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminControl;
