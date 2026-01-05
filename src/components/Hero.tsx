import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">RF Group • Soluções Empresariais</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Transformamos empresas em
            <span className="block text-gradient">líderes de mercado</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            A ECO Soluções Empresariais oferece consultoria estratégica sob medida, 
            combinando expertise jurídica, gestão imobiliária e soluções corporativas 
            para impulsionar o crescimento do seu negócio.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              Agende uma Consultoria
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted group">
              <Play className="mr-2 w-4 h-4" />
              Conheça o RF Group
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">14+</p>
              <p className="text-sm text-muted-foreground mt-1">Anos de Mercado</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground mt-1">Empresas Atendidas</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">4</p>
              <p className="text-sm text-muted-foreground mt-1">Empresas no Grupo</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">98%</p>
              <p className="text-sm text-muted-foreground mt-1">Satisfação</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <span className="text-xs text-muted-foreground">Role para explorar</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
