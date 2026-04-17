import { Outlet } from "react-router-dom";
import { AnalyticsManager } from "./AnalyticsManager";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function SiteLayout({ theme, onToggleTheme }) {
  return (
    <div className="section-grid flex min-h-screen flex-col">
      <AnalyticsManager />
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-base-100 focus:px-3 focus:py-2 focus:text-sm"
        href="#main-content"
      >
        Pular para conteudo principal
      </a>
      <Navbar onToggleTheme={onToggleTheme} theme={theme} />
      <main className="flex-1" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
