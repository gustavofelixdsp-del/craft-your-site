import { Mail, MapPin, Phone, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    products: [
      { name: "Exchange", href: "#" },
      { name: "Custódia", href: "#" },
      { name: "Staking", href: "#" },
      { name: "API", href: "#" },
    ],
    company: [
      { name: "Sobre Nós", href: "#sobre" },
      { name: "Carreiras", href: "#" },
      { name: "Imprensa", href: "#" },
      { name: "Blog", href: "#" },
    ],
    legal: [
      { name: "Termos de Uso", href: "#" },
      { name: "Privacidade", href: "#" },
      { name: "Compliance", href: "#" },
      { name: "Segurança", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer id="contato" className="bg-[#161718] pt-20 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <span className="text-2xl font-bold text-foreground">
                Coin<span className="text-primary">Shares</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              A plataforma líder em investimentos digitais. Segurança institucional para todos os investidores.
            </p>
            <div className="flex flex-col gap-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>contato@coinshares.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+55 (11) 3000-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-foreground font-bold mb-6">Produtos</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-foreground font-bold mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-foreground font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-divider mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 CoinShares. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
