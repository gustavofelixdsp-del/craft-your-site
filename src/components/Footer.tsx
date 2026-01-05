import { Linkedin, Instagram, Facebook } from 'lucide-react';
import ecoLogo from '@/assets/eco-logo.png';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={ecoLogo} alt="ECO Soluções Empresariais" className="h-10 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Soluções empresariais estratégicas para empresas que querem liderar seus mercados.
            </p>
          </div>

          {/* Links */}
          <div>
            <h5 className="font-semibold mb-4">RF Group</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">ECO Soluções</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">RFeitosa Advogados</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Feitosa Participações</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Feitosa Administração</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Soluções</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Consultoria Estratégica</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Assessoria Jurídica</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Soluções Imobiliárias</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gestão Financeira</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Contato</h5>
            <ul className="space-y-3">
              <li><span className="text-sm text-muted-foreground">contato@ecosolucoes.com.br</span></li>
              <li><span className="text-sm text-muted-foreground">(88) 99999-9999</span></li>
              <li><span className="text-sm text-muted-foreground">Sobral - CE</span></li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 ECO Soluções Empresariais. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
