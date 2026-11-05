"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useDemoStore } from "@/lib/store/demo-store";
import { Logo } from "@/components/brand/logo";
import { SidebarNav } from "./sidebar-nav";
import { Topbar } from "./topbar";

export function AppShell({ children }: { children: React.ReactNode }) {
  const boot = useDemoStore((s) => s.boot);
  useEffect(() => {
    void boot();
  }, [boot]);

  return (
    <div className="flex h-dvh overflow-hidden bg-background">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-card focus:px-3 focus:py-2 focus:shadow">
        Skip to content
      </a>
      <aside className="hidden w-60 shrink-0 flex-col border-r bg-sidebar md:flex">
        <div className="flex h-16 items-center border-b px-5">
          <Link href="/app/dashboard" className="rounded-md outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
            <Logo />
          </Link>
        </div>
        <SidebarNav />
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main id="main" className="min-h-0 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
