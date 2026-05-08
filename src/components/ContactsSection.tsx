import { MapPin, Phone, Clock } from "lucide-react";

const ContactsSection = () => {
  return (
    <section className="section-padding" id="contacts">
      <div className="container-narrow">
        <h2 className="font-display text-2xl font-bold text-center md:text-3xl mb-10">
          Контакты
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Адрес</p>
                <p className="text-sm text-muted-foreground">г. Краснодар, ул. Красная, д. 100</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Телефон</p>
                <a href="tel:+78612001234" className="text-sm text-primary hover:underline">+7 (861) 200-12-34</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Режим работы</p>
                <p className="text-sm text-muted-foreground">Пн–Сб: 9:00–20:00</p>
                <p className="text-sm text-muted-foreground">Вс: выходной</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border h-64 bg-muted flex items-center justify-center">
            <p className="text-sm text-muted-foreground">Яндекс Карта — вставьте iframe</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
