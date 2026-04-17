import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigationItems } from "../../data/siteContent";
import { trackEvent } from "../../lib/analytics";

function navClass({ isActive }) {
  return isActive
    ? "text-primary"
    : "text-base-content/80 transition-colors hover:text-base-content";
}

export function Navbar({ theme = "dark", onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-base-content/10 top-nav-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link className="font-display text-xl font-semibold tracking-tight" to="/">
          iobee <span className="text-primary">V3</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <NavLink key={item.path} className={navClass} to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            aria-label="Alternar tema"
            className="btn btn-ghost btn-sm"
            onClick={onToggleTheme}
            type="button"
          >
            {theme === "dark" ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
          </button>
          <a
            className="btn btn-outline btn-sm"
            href="https://app.iobee.io"
            onClick={() => trackEvent("app_access_click", { context: "navbar" })}
            rel="noreferrer"
            target="_blank"
          >
            Acessar app
          </a>
          <Link
            className="btn btn-primary"
            onClick={() => trackEvent("cta_agendar_demonstracao_click", { context: "navbar" })}
            to="/contato"
          >
            Agendar demonstracao
          </Link>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Abrir menu"
          className="btn btn-ghost btn-square lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <XMarkIcon className="size-6" /> : <Bars3Icon className="size-6" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-base-content/10 bg-base-100/95 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                className={navClass}
                onClick={() => setIsOpen(false)}
                to={item.path}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <button className="btn btn-outline btn-sm" onClick={onToggleTheme} type="button">
                {theme === "dark" ? "Modo claro" : "Modo escuro"}
              </button>
              <a
                className="btn btn-outline btn-sm"
                href="https://app.iobee.io"
                onClick={() => {
                  trackEvent("app_access_click", { context: "navbar_mobile" });
                  setIsOpen(false);
                }}
                rel="noreferrer"
                target="_blank"
              >
                App
              </a>
              <Link
                className="btn btn-primary btn-sm"
                onClick={() => {
                  trackEvent("cta_agendar_demonstracao_click", { context: "navbar_mobile" });
                  setIsOpen(false);
                }}
                to="/contato"
              >
                Agendar demonstracao
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
