import { defaultLocale, getContent } from "@/content";
import { JsonLd } from "@/components/JsonLd";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Leadership } from "@/components/sections/Leadership";
import { Methodology } from "@/components/sections/Methodology";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";

export default function HomePage() {
  const content = getContent(defaultLocale);

  return (
    <>
      <a
        href="#konten-utama"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-navy-900"
      >
        {content.a11y.skipToContent}
      </a>
      <Header
        nav={content.nav.items}
        cta={content.nav.cta}
        labels={{
          mainNav: content.a11y.mainNav,
          openMenu: content.a11y.openMenu,
          closeMenu: content.a11y.closeMenu,
        }}
      />
      <main id="konten-utama">
        <Hero content={content} />
        <About content={content} />
        <Services content={content} />
        <Methodology content={content} />
        <Portfolio content={content} />
        <Capabilities content={content} />
        <Clients content={content} />
        <Leadership content={content} />
        <Contact content={content} />
      </main>
      <Footer content={content} />
      <JsonLd description={content.meta.description} />
    </>
  );
}
