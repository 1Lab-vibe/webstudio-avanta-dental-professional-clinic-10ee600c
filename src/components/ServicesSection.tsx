import { Smile, Stethoscope, Sparkles, CircleDot, Baby, ScanLine } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Лечение зубов", desc: "Кариес, пульпит, периодонтит — современные материалы и анестезия" },
  { icon: Sparkles, title: "Отбеливание", desc: "Профессиональное отбеливание и чистка для здоровой улыбки" },
  { icon: CircleDot, title: "Имплантация", desc: "Надёжные импланты с гарантией. Восстановление за 1 визит" },
  { icon: Smile, title: "Протезирование", desc: "Коронки, виниры, мосты — естественный вид и долгий срок" },
  { icon: Baby, title: "Детская стоматология", desc: "Бережное лечение для детей в комфортной обстановке" },
  { icon: ScanLine, title: "Диагностика", desc: "3D-снимки, панорамный рентген, составление плана лечения" },
];

const ServicesSection = () => {
  return (
    <section className="section-padding" id="services">
      <div className="container-narrow">
        <h2 className="font-display text-2xl font-bold text-center md:text-3xl mb-10">
          Услуги
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl border bg-card p-6 transition-shadow hover:shadow-md">
              <s.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-body text-base font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
