import { Star, ShieldCheck, Award, Users } from "lucide-react";

const reviews = [
  { name: "Анна К.", text: "Отличная клиника! Врачи внимательные, всё объяснили. Лечила кариес — быстро и без боли.", rating: 5 },
  { name: "Дмитрий С.", text: "Ставил импланты — результат превзошёл ожидания. Рекомендую всем знакомым.", rating: 5 },
  { name: "Елена М.", text: "Хожу всей семьёй уже 3 года. Дети не боятся, а это главное.", rating: 5 },
];

const stats = [
  { icon: Users, value: "2 000+", label: "пациентов" },
  { icon: Award, value: "5 лет", label: "опыт работы" },
  { icon: ShieldCheck, value: "100%", label: "гарантия на работы" },
];

const TrustSection = () => {
  return (
    <section className="section-padding section-alt" id="reviews">
      <div className="container-narrow">
        <h2 className="font-display text-2xl font-bold text-center md:text-3xl mb-4">
          Нам доверяют
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
          Рейтинг 4.8 на Яндекс Картах — реальные отзывы наших пациентов
        </p>

        <div className="grid gap-4 sm:grid-cols-3 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 rounded-xl bg-card p-6 text-center shadow-sm">
              <s.icon className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold text-foreground">{s.value}</span>
              <span className="text-sm text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-xl bg-card p-6 shadow-sm">
              <div className="flex gap-0.5 mb-3">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current trust-star" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-4">«{r.text}»</p>
              <p className="text-sm font-medium text-muted-foreground">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
