import { LayoutDashboard, BarChart3, Settings, Users, FileText, Truck } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ralfImg from "@/assets/ralf-schmidt.jpg";

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

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarContent className="pt-5">
        <div className="px-5 pb-5 flex items-center gap-2">
          <Truck className="h-5 w-5 text-primary shrink-0" />
          <a href="/" className="font-bold text-lg tracking-tight text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {collapsed ? "" : "Rasolution"}
          </a>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground text-[11px] uppercase tracking-widest px-5">
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
                      className="gap-3 hover:bg-muted/60 rounded-lg mx-2 px-3 py-2.5"
                      activeClassName="bg-primary/10 text-primary font-semibold"
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

      {/* Partner section */}
      <SidebarFooter className="border-t border-border p-5">
        <div className={`flex ${collapsed ? "justify-center" : "items-center gap-4"}`}>
          <Avatar className="h-14 w-14 shrink-0 border-2 border-primary/30 shadow-lg shadow-primary/20 ring-2 ring-primary/10">
            <AvatarFallback className="bg-primary/10 text-primary text-lg font-bold">RS</AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground leading-tight">Ihr Fuhrpark-Experte</span>
              <span className="text-sm font-bold text-foreground truncate mt-0.5">Ralf Schmidt</span>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
