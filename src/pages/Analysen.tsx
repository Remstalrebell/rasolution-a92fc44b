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
  <div className="space-y-8">
    <h1 className="text-balance">Analysen</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {kpis.map((k) => (
        <Card key={k.label} className="rounded-xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="rounded-lg bg-primary/10 p-3">
              <k.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">{k.label}</p>
              <p className="text-2xl font-bold tracking-tight">{k.value}</p>
            </div>
            <span className={`text-xs font-medium flex items-center gap-1 ${k.up ? "text-green-600" : "text-destructive"}`}>
              {k.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {k.change}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>

    <Card className="rounded-xl">
      <CardHeader>
        <CardTitle className="text-lg">Umsatzentwicklung (Letzte 6 Monate)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between gap-3 h-52">
          {months.map((m) => (
            <div key={m.label} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground">{m.value}%</span>
              <div
                className="w-full rounded-t-md bg-primary/80 transition-all"
                style={{ height: `${m.value * 2}px` }}
              />
              <span className="text-xs text-muted-foreground">{m.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default Analysen;
