import { useState } from "react";
import { Link2, Instagram, Youtube, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const affiliateChannels = [
  { key: "linktree", label: "Linktree", icon: Link2, placeholder: "https://linktr.ee/..." },
  { key: "instagram", label: "Instagram", icon: Instagram, placeholder: "https://instagram.com/..." },
  { key: "youtube", label: "YouTube", icon: Youtube, placeholder: "https://youtube.com/@..." },
  { key: "facebook", label: "Facebook", icon: Link2, placeholder: "https://facebook.com/..." },
  { key: "pinterest", label: "Pinterest", icon: Link2, placeholder: "https://pinterest.com/..." },
];

const partners = [
  { name: "FleetCharge GmbH", status: "aktiv" },
  { name: "GreenDrive AG", status: "aktiv" },
  { name: "AutoHaus Müller", status: "pausiert" },
  { name: "E-Mobil Solutions", status: "aktiv" },
  { name: "LogiFleet KG", status: "inaktiv" },
];

const MarketingInternal = () => {
  const { toast } = useToast();
  const [urls, setUrls] = useState<Record<string, string>>({
    linktree: "https://linktr.ee/rasolution",
    instagram: "https://instagram.com/rasolution",
    youtube: "https://youtube.com/@rasolution",
    facebook: "https://facebook.com/rasolution",
    pinterest: "https://pinterest.com/rasolution",
  });

  const handleSave = (channel: string) => {
    toast({ title: "Link gespeichert", description: `${channel}-URL wurde aktualisiert.` });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <div>
        <h1 className="text-balance">Affiliate-Verwaltung</h1>
        <p className="text-muted-foreground mt-1">Interner Bereich – Verwaltung von Affiliate-Links und Partner-Status.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {affiliateChannels.map((ch) => (
          <Card key={ch.key} className="rounded-xl">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <ch.icon className="h-5 w-5 text-amber-600" />
                {ch.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input
                value={urls[ch.key] || ""}
                onChange={(e) => setUrls((prev) => ({ ...prev, [ch.key]: e.target.value }))}
                placeholder={ch.placeholder}
              />
              <Button size="sm" className="w-full" onClick={() => handleSave(ch.label)}>
                Speichern
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle className="text-lg">Partner-Übersicht</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Partner-Name</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {partners.map((p) => (
                <TableRow key={p.name}>
                  <TableCell className="font-medium">{p.name}</TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant={p.status === "aktiv" ? "default" : p.status === "pausiert" ? "secondary" : "outline"}
                      className="gap-1"
                    >
                      {p.status === "aktiv" ? (
                        <CheckCircle className="h-3 w-3" />
                      ) : (
                        <XCircle className="h-3 w-3" />
                      )}
                      {p.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketingInternal;
