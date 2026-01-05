import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Vamos Conversar</p>
          <h2 className="mb-6">
            Pronto para transformar
            <span className="text-gradient block">sua empresa?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como a ECO Soluções pode impulsionar 
            o crescimento do seu negócio com estratégias personalizadas.
          </p>

          {/* Newsletter Form */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="bg-muted/50 border-border h-12"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 whitespace-nowrap">
                Quero ser contatado
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Ao enviar, você concorda com nossa política de privacidade.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <p className="font-medium">E-mail</p>
              <a href="mailto:contato@ecosolucoes.com.br" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                contato@ecosolucoes.com.br
              </a>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <p className="font-medium">Telefone</p>
              <a href="tel:+5588999999999" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                (88) 99999-9999
              </a>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <p className="font-medium">Endereço</p>
              <p className="text-muted-foreground text-sm text-center">
                Sobral - CE, Brasil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
