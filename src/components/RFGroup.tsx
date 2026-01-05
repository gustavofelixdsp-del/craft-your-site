import { Scale, Building2, Briefcase, Home, ArrowUpRight } from 'lucide-react';

const companies = [
  {
    icon: Briefcase,
    name: 'ECO Soluções',
    subtitle: 'Empresariais',
    description: 'Consultoria estratégica e soluções corporativas sob medida. O topo do funil do RF Group.',
    year: '2024',
    color: 'primary',
  },
  {
    icon: Scale,
    name: 'RFeitosa',
    subtitle: 'Advogados Associados',
    description: 'Assessoria jurídica completa para pessoas físicas e jurídicas. A origem de tudo desde 2011.',
    year: '2011',
    color: 'secondary',
  },
  {
    icon: Building2,
    name: 'Feitosa',
    subtitle: 'Participações Imobiliárias',
    description: 'Gestão e locação de imóveis comerciais premium em Sobral e região.',
    year: '2018',
    color: 'secondary',
  },
  {
    icon: Home,
    name: 'Feitosa',
    subtitle: 'Administração de Imóveis',
    description: 'Administração profissional de imóveis de terceiros. Solução completa para investidores.',
    year: '2022',
    color: 'secondary',
  },
];

const RFGroup = () => {
  return (
    <section id="rfgroup" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">RF Group</p>
          <h2 className="mb-6">
            Um ecossistema completo
            <span className="text-gradient block">de soluções empresariais</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            O RF Group é formado por quatro empresas especializadas que trabalham 
            de forma integrada para oferecer soluções completas ao mercado.
          </p>
        </div>

        {/* Companies Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-border" />

          <div className="space-y-8">
            {companies.map((company, index) => (
              <div
                key={company.name + company.subtitle}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10" />

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="group bg-card border border-border rounded-2xl p-6 card-hover relative overflow-hidden">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        company.color === 'primary' ? 'bg-primary/20' : 'bg-secondary/20'
                      }`}>
                        <company.icon className={`w-6 h-6 ${
                          company.color === 'primary' ? 'text-primary' : 'text-gray-light'
                        }`} />
                      </div>
                      <span className="text-sm text-muted-foreground">{company.year}</span>
                    </div>

                    <h4 className="text-lg font-semibold">
                      {company.name}
                      <span className="text-muted-foreground font-normal block text-sm">{company.subtitle}</span>
                    </h4>
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{company.description}</p>

                    <button className="flex items-center gap-1 text-primary text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      Conhecer <ArrowUpRight className="w-4 h-4" />
                    </button>

                    {/* Hover effect */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RFGroup;
