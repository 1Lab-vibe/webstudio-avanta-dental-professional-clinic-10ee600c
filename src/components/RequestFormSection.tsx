import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const RequestFormSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    toast({
      title: "Заявка отправлена",
      description: "Мы перезвоним вам в ближайшее время.",
    });
    setName("");
    setPhone("");
  };

  return (
    <section className="section-padding bg-primary text-primary-foreground" id="request">
      <div className="container-narrow">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-2xl font-bold md:text-3xl mb-4">
            Запишитесь на приём
          </h2>
          <p className="opacity-90 mb-8">
            Оставьте имя и телефон — мы перезвоним и подберём удобное время
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:gap-2">
            <Input
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-white/50 focus-visible:ring-white/30"
            />
            <Input
              placeholder="+7 (___) ___-__-__"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-white/50 focus-visible:ring-white/30"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold whitespace-nowrap"
            >
              Отправить
            </Button>
          </form>
          <p className="text-xs opacity-60 mt-4">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных
          </p>
        </div>
      </div>
    </section>
  );
};

export default RequestFormSection;
