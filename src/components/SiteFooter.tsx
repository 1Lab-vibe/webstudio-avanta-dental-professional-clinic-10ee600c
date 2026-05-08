const SiteFooter = () => (
  <footer className="border-t bg-card py-8 px-4">
    <div className="container-narrow flex flex-col items-center gap-2 text-center">
      <span className="font-display text-base font-bold text-primary">AVANTA</span>
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Стоматология AVANTA, Краснодар. Все права защищены.</p>
      <p className="text-xs text-muted-foreground">Лицензия на осуществление медицинской деятельности</p>
    </div>
  </footer>
);

export default SiteFooter;
