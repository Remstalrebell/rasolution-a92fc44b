import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { User, Settings, LogOut, Sun, Moon } from "lucide-react";
import fleetBg from "@/assets/fleet-bg.jpg";

const AppLayout = () => {
  const navigate = useNavigate();
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />

        <div className="flex-1 flex flex-col relative">
          {/* Fleet background texture — visible but subtle */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0 opacity-[0.08] dark:opacity-[0.05]"
            style={{ backgroundImage: `url(${fleetBg})` }}
          />
          {/* Soft overlay to tint the image */}
          <div className="absolute inset-0 bg-background/70 pointer-events-none z-0" />

          <header className="h-16 flex items-center justify-between border-b border-border px-6 bg-background/80 backdrop-blur-sm relative z-10">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <span className="text-sm font-semibold tracking-wide text-foreground/70">Rasolution</span>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setDark(!dark)}>
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    <Avatar className="h-9 w-9 cursor-pointer border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">RS</AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => navigate("/app/einstellungen")}>
                    <User className="mr-2 h-4 w-4" /> Profil
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/app/einstellungen")}>
                    <Settings className="mr-2 h-4 w-4" /> Einstellungen
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive focus:text-destructive" onClick={() => console.log("Abmelden")}>
                    <LogOut className="mr-2 h-4 w-4" /> Abmelden
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <main className="flex-1 p-8 lg:p-10 relative z-10">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
