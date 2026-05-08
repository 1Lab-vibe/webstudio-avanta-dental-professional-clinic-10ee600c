const prices = [
  { service: "Консультация + осмотр", price: "Бесплатно" },
  { service: "Лечение кариеса", price: "от 3 500 ₽" },
  { service: "Профессиональная чистка", price: "от 4 000 ₽" },
  { service: "Отбеливание", price: "от 12 000 ₽" },
  { service: "Имплант под ключ", price: "от 35 000 ₽" },
  { service: "Коронка (металлокерамика)", price: "от 8 000 ₽" },
  { service: "Винир (E-max)", price: "от 18 000 ₽" },
];

const PricingSection = () => {
  return (
    <section className="section-padding" id="prices">
      <div className="container-narrow">
        <h2 className="font-display text-2xl font-bold text-center md:text-3xl mb-4">
          Цены
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-md mx-auto">
          Точная стоимость определяется после осмотра. Ниже — ориентировочные цены.
        </p>
        <div className="mx-auto max-w-2xl rounded-xl border bg-card overflow-hidden shadow-sm">
          {prices.map((p, i) => (
            <div
              key={p.service}
              className={`flex items-center justify-between px-6 py-4 ${i !== prices.length - 1 ? 'border-b' : ''}`}
            >
              <span className="text-sm font-medium text-foreground">{p.service}</span>
              <span className="text-sm font-semibold text-primary whitespace-nowrap ml-4">{p.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
