"use client";

import { useEffect, useId, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

interface HeaderProps {
  nav: { label: string; href: string }[];
  cta: { label: string; href: string };
  labels: { mainNav: string; openMenu: string; closeMenu: string };
}

export function Header({ nav, cta, labels }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 80rem)");
    const onChange = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="container-grid flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#beranda" className="shrink-0">
          <Logo className="h-8 w-auto sm:h-9" />
        </a>

        <nav aria-label={labels.mainNav} className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="py-2 text-[0.9375rem] font-medium text-ink underline-offset-8 decoration-1 hover:text-navy-700 hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href={cta.href} className="btn btn-accent hidden sm:inline-flex">
            {cta.label}
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-line text-navy-900 xl:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? labels.closeMenu : labels.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      <div id={menuId} hidden={!open} className="border-t border-line bg-white xl:hidden">
        <nav aria-label={labels.mainNav} className="container-grid py-4">
          <ul className="divide-y divide-line">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center justify-between py-3 text-base font-medium text-ink"
                >
                  {item.label}
                  <Icon name="arrowRight" size={18} className="text-muted" />
                </a>
              </li>
            ))}
          </ul>
          <a href={cta.href} onClick={() => setOpen(false)} className="btn btn-accent mt-4 w-full sm:hidden">
            {cta.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
