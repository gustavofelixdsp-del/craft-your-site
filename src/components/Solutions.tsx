import { Scale, Building2, Briefcase, LineChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    icon: Briefcase,
    title: 'Consultoria Estratégica',
    description: 'Diagnóstico completo e implementação de soluções customizadas para acelerar o crescimento do seu negócio.',
    features: ['Análise de mercado', 'Planejamento estratégico', 'Gestão de mudanças'],
    highlight: true,
  },
  {
    icon: Scale,
    title: 'Assessoria Jurídica',
    description: 'Proteção legal completa através do RFeitosa Advogados Associados, com mais de 14 anos de experiência.',
    features: ['Direito empresarial', 'Contratos', 'Contencioso'],
    highlight: false,
  },
  {
    icon: Building2,
    title: 'Soluções Imobiliárias',
    description: 'Gestão e locação de imóveis comerciais premium através da Feitosa Participações Imobiliárias.',
    features: ['Locação comercial', 'Administração de imóveis', 'Investimentos'],
    highlight: false,
  },
  {
    icon: LineChart,
    title: 'Gestão Financeira',
    description: 'Estruturação financeira e contábil integrada para otimizar seus resultados e garantir compliance.',
    features: ['Planejamento tributário', 'Controladoria', 'Gestão de custos'],
    highlight: false,
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="section-padding relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Nossas Soluções</p>
          <h2 className="mb-6">
            Soluções completas para
            <span className="text-gradient block">empresas que querem crescer</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos um ecossistema completo de serviços empresariais, 
            integrados para maximizar seus resultados.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`group relative rounded-2xl border transition-all duration-500 overflow-hidden ${
                solution.highlight
                  ? 'bg-gradient-to-br from-primary/10 via-card to-card border-primary/30 hover:border-primary/50'
                  : 'bg-card border-border hover:border-primary/30'
              }`}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    solution.highlight ? 'bg-primary/20' : 'bg-muted'
                  }`}>
                    <solution.icon className={`w-7 h-7 ${solution.highlight ? 'text-primary' : 'text-gray-light'}`} />
                  </div>
                  {solution.highlight && (
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      Destaque
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>

                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group/btn"
                >
                  Saiba mais
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-[60px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
