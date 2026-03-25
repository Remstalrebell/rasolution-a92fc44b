import { TrendingUp, TrendingDown, Users, Euro, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const kpis = [
  { label: "Gesamtumsatz", value: "€ 124.500", change: "+12%", up: true, icon: Euro },
  { label: "Aktive Nutzer", value: "1.240", change: "+5%", up: true, icon: Users },
  { label: "Conversion Rate", value: "3,8%", change: "-0,2%", up: false, icon: Target },
];

const months = [
  { label: "Okt", value: 68 },
  { label: "Nov", value: 55 },
  { label: "Dez", value: 80 },
  { label: "Jan", value: 62 },
  { label: "Feb", value: 90 },
  { label: "Mär", value: 100 },
];

const Analysen = () => (
  <div className="space-y-10">
    <h1 className="text-balance">Analysen</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {kpis.map((k) => (
        <Card key={k.label} className="rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-7 flex items-center gap-5">
            <div className="rounded-xl bg-primary/8 p-4">
              <k.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-1">{k.label}</p>
              <p className="text-3xl font-extrabold tracking-tight text-bronze-gradient">{k.value}</p>
            </div>
            <span className={`text-xs font-semibold flex items-center gap-1 px-2 py-1 rounded-full ${k.up ? "text-emerald-700 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-900/30" : "text-destructive bg-red-50 dark:bg-red-900/30"}`}>
              {k.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {k.change}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>

    <Card className="rounded-xl shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Umsatzentwicklung (Letzte 6 Monate)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between gap-4 h-56 pt-4">
          {months.map((m) => (
            <div key={m.label} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xs font-semibold text-muted-foreground">{m.value}%</span>
              <div
                className="w-full rounded-t-lg bg-gradient-to-t from-primary to-primary/60 transition-all hover:from-primary hover:to-accent/70"
                style={{ height: `${m.value * 2}px` }}
              />
              <span className="text-xs font-medium text-muted-foreground">{m.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default Analysen;
