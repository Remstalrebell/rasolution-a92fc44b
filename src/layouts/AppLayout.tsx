import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { User, Settings, LogOut, Sun, Moon } from "lucide-react";

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

        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center justify-between border-b border-border px-4">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <span className="text-sm font-medium text-muted-foreground">Rasolution</span>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setDark(!dark)}>
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    <Avatar className="h-8 w-8 cursor-pointer">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">JD</AvatarFallback>
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

          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
