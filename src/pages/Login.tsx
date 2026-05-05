import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";
import logoUrl from "@/assets/rasolution-logo.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const STATIC_PASSWORD = "Rasolution2026";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === STATIC_PASSWORD) {
      sessionStorage.setItem("rasolution_auth", "true");
      toast({ title: "Willkommen!", description: "Erfolgreich angemeldet." });
      navigate("/app");
    } else {
      setError(true);
      toast({ title: "Zugriff verweigert", description: "Falsches Passwort.", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md rounded-2xl shadow-xl">
        <CardHeader className="text-center space-y-4 pb-2">
          <img src={logoUrl} alt="Rasolution" className="mx-auto h-10 w-auto object-contain" />
          <CardTitle className="text-2xl font-bold">Rasolution Login</CardTitle>
          <p className="text-sm text-muted-foreground">Bitte geben Sie Ihr Passwort ein, um fortzufahren.</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="password"
                placeholder="Passwort"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                className={`pl-10 ${error ? "border-destructive" : ""}`}
                autoFocus
              />
            </div>
            {error && <p className="text-sm text-destructive">Falsches Passwort. Bitte versuchen Sie es erneut.</p>}
            <Button type="submit" className="w-full" size="lg">
              Anmelden
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
