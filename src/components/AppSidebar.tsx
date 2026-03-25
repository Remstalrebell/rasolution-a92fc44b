import { LayoutDashboard, BarChart3, Settings, Users, FileText } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/app", icon: LayoutDashboard },
  { title: "Projekte", url: "/app/projekte", icon: FileText },
  { title: "Kunden", url: "/app/kunden", icon: Users },
  { title: "Analysen", url: "/app/analysen", icon: BarChart3 },
  { title: "Einstellungen", url: "/app/einstellungen", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarContent className="pt-4">
        <div className="px-4 pb-4">
          <a href="/" className="font-bold text-lg tracking-tight text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {collapsed ? "RS" : "Rasolution"}
          </a>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground text-xs uppercase tracking-wider">
            Hauptmenü
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className="gap-3 hover:bg-muted/50"
                      activeClassName="bg-primary/10 text-primary font-medium"
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Partner footer */}
      <SidebarFooter className="border-t border-border p-4">
        <div className={`flex items-center ${collapsed ? "justify-center" : "gap-3"}`}>
          <Avatar className="h-9 w-9 shrink-0 border-2 border-primary/20">
            <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">RS</AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground leading-tight">Dein Flotten-Partner</span>
              <span className="text-sm font-semibold text-foreground truncate">Ralf Schmidt</span>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
