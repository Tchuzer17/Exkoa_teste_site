const Mission = () => {
  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="container max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Quem Somos
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold text-foreground leading-tight">
              Nossa Missão
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
              <p>
                Na Exkoa, acreditamos que a agricultura é a base do crescimento
                das nossas comunidades. A nossa missão é conectar produtores,
                compradores e transportadores através da tecnologia, criando um
                ecossistema agrícola mais justo, eficiente e acessível para
                todos.
              </p>
              <p>
                Trabalhamos para ajudar pequenos agricultores a venderem os
                seus produtos com facilidade, reduzir perdas na produção e
                aumentar as oportunidades de rendimento. Ao mesmo tempo,
                facilitamos o acesso dos compradores a produtos frescos, de
                qualidade e com preços mais transparentes.
              </p>
              <p>
                Mais do que uma plataforma, a Exkoa é uma ponte entre pessoas,
                oportunidades e crescimento sustentável, fortalecendo a
                economia local e valorizando o trabalho de quem produz.
              </p>
            </div>
            <div className="flex gap-8 pt-2">
              <div>
                <p className="text-3xl font-bold font-display text-primary">3+</p>
                <p className="text-sm text-muted-foreground mt-1">Países em África</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-display text-primary">500+</p>
                <p className="text-sm text-muted-foreground mt-1">Produtores Activos</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-display text-primary">10k+</p>
                <p className="text-sm text-muted-foreground mt-1">Transacções Realizadas</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="/mission.png"
                alt="Agricultores africanos conectados pela Exkoa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-xl px-6 py-4 shadow-elevated">
              <p className="text-sm font-semibold">🌱 Crescimento Sustentável</p>
              <p className="text-xs opacity-80 mt-0.5">Do Campo à Mesa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Mission };
