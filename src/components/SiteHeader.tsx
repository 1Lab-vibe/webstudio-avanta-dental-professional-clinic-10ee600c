import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Услуги", href: "#services" },
  { label: "Цены", href: "#prices" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container-narrow flex h-14 items-center justify-between px-4">
        <a href="#" className="font-display text-lg font-bold text-primary">AVANTA</a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
          <a href="tel:+78612001234" className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Позвонить</span>
          </a>
        </Button>
      </div>
    </header>
  );
};

export default SiteHeader;
