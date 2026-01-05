import { Shield, Coins, BarChart3, Lock, Wallet, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Segurança Institucional",
    description: "Proteção de nível bancário com criptografia de ponta e custódia multi-assinatura.",
  },
  {
    icon: Coins,
    title: "Diversificação Inteligente",
    description: "Acesse uma variedade de criptoativos selecionados por especialistas do mercado.",
  },
  {
    icon: BarChart3,
    title: "Analytics Avançado",
    description: "Dashboards em tempo real com métricas detalhadas do seu portfólio.",
  },
  {
    icon: Lock,
    title: "Custódia Segura",
    description: "Seus ativos protegidos com tecnologia cold storage e seguro contra perdas.",
  },
  {
    icon: Wallet,
    title: "Gestão Simplificada",
    description: "Interface intuitiva para gerenciar todos os seus investimentos em um só lugar.",
  },
  {
    icon: Globe,
    title: "Acesso Global",
    description: "Opere 24/7 em qualquer lugar do mundo com nossa plataforma cloud.",
  },
];

const Features = () => {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-background relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que Escolher a <span className="text-primary">CoinShares</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Combinamos tecnologia de ponta com expertise financeira para oferecer a melhor experiência em investimentos digitais.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-glow-card hover:shadow-glow animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
