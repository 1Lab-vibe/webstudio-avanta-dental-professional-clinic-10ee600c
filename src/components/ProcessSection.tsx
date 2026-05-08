const steps = [
  { num: "01", title: "Запись", desc: "Оставьте заявку на сайте или позвоните — подберём удобное время" },
  { num: "02", title: "Консультация", desc: "Осмотр, диагностика, план лечения и стоимость — без скрытых доплат" },
  { num: "03", title: "Лечение", desc: "Проводим процедуры с современным оборудованием и анестезией" },
  { num: "04", title: "Результат", desc: "Контрольный осмотр и гарантия на все выполненные работы" },
];

const ProcessSection = () => {
  return (
    <section className="section-padding section-alt" id="process">
      <div className="container-narrow">
        <h2 className="font-display text-2xl font-bold text-center md:text-3xl mb-10">
          Как мы работаем
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.num} className="relative">
              <span className="text-4xl font-bold text-primary/15 font-display">{s.num}</span>
              <h3 className="font-body text-base font-semibold mt-1 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
