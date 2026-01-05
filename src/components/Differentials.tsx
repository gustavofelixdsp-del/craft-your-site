import { CheckCircle, Zap, Shield, Clock } from 'lucide-react';

const stats = [
  {
    icon: CheckCircle,
    value: '100%',
    label: 'Suporte Contínuo',
    description: 'Acompanhamento dedicado do início ao fim de cada projeto',
  },
  {
    icon: Zap,
    value: 'Ágil',
    label: 'Execução Rápida',
    description: 'Implementamos soluções com velocidade e eficiência',
  },
  {
    icon: Shield,
    value: '14+',
    label: 'Anos de Experiência',
    description: 'Décadas de expertise combinada no mercado',
  },
];

const Differentials = () => {
  return (
    <section id="differentials" className="section-padding relative">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Por que nos escolher</p>
          <h2 className="mb-6">
            Confiança de hoje
            <span className="text-gradient block">para o amanhã</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ao longo de mais de uma década, construímos relacionamentos duradouros com 
            grandes empresas do mercado através de resultados consistentes e comprometimento 
            com a excelência.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group bg-card border border-border rounded-2xl p-8 card-hover relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
              </div>
              <h4 className="font-semibold mb-2">{stat.label}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>

              {/* Graph decoration */}
              <div className="absolute bottom-0 right-0 w-32 h-20 opacity-20">
                <svg viewBox="0 0 100 50" className="w-full h-full">
                  <path
                    d="M0,40 Q20,30 40,35 T80,20 L100,25 L100,50 L0,50 Z"
                    fill="hsl(var(--primary))"
                    opacity="0.3"
                  />
                  <path
                    d="M0,40 Q20,30 40,35 T80,20 L100,25"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 items-center">
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-2">Nossos Clientes</h4>
              <p className="text-sm text-muted-foreground">
                Empresas que confiam em nossas soluções
              </p>
            </div>
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-16 bg-muted/50 rounded-lg flex items-center justify-center border border-border/50"
                >
                  <span className="text-muted-foreground text-sm">Cliente {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
