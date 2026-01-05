import { Target, Award, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Nossa Visão</p>
            <h2 className="mb-6">
              O que é a visão da
              <span className="text-gradient block">ECO Soluções?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Inspirados nas Big Four globais como a Ernst & Young, a ECO Soluções 
              Empresariais nasceu para ser muito mais que uma consultoria tradicional. 
              Somos o braço estratégico do RF Group que pega na mão da sua empresa e 
              a leva para o próximo nível.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Não apenas ensinamos e passamos processos — nós executamos junto com você. 
              Nossa equipe de especialistas entra em campo para implementar as soluções 
              que sua empresa precisa para crescer de forma sustentável e competitiva.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Saiba Mais
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-2xl p-6 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Estratégia</h4>
                  <p className="text-sm text-muted-foreground">Planejamento sob medida para seu negócio</p>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-gray-light" />
                  </div>
                  <h4 className="font-semibold mb-2">Excelência</h4>
                  <p className="text-sm text-muted-foreground">Padrão de qualidade internacional</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-card border border-border rounded-2xl p-6 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Parceria</h4>
                  <p className="text-sm text-muted-foreground">Atuamos lado a lado com sua equipe</p>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-gray-light" />
                  </div>
                  <h4 className="font-semibold mb-2">Resultados</h4>
                  <p className="text-sm text-muted-foreground">Foco em crescimento mensurável</p>
                </div>
              </div>
            </div>
            
            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-[80px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
