import { TrendingUp, TrendingDown } from "lucide-react";

const cryptoData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$67,432.50",
    change: "+5.2%",
    isPositive: true,
    volume: "$28.4B",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,892.18",
    change: "+3.8%",
    isPositive: true,
    volume: "$15.2B",
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "$178.45",
    change: "+12.1%",
    isPositive: true,
    volume: "$4.8B",
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: "$0.892",
    change: "-1.2%",
    isPositive: false,
    volume: "$1.2B",
  },
];

const DataSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mercado em <span className="text-primary">Tempo Real</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Acompanhe as principais criptomoedas e tome decisões informadas com dados atualizados.
          </p>
        </div>

        {/* Data Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cryptoData.map((crypto, index) => (
            <div
              key={crypto.symbol}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-glow-card hover:shadow-glow animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header with badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">{crypto.symbol[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{crypto.name}</h4>
                    <span className="text-sm text-muted-foreground">{crypto.symbol}</span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className="text-2xl font-bold text-foreground">{crypto.price}</span>
              </div>

              {/* Change & Volume */}
              <div className="flex items-center justify-between">
                <div className={`flex items-center gap-1 ${crypto.isPositive ? 'text-secondary' : 'text-destructive'}`}>
                  {crypto.isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span className="font-semibold">{crypto.change}</span>
                </div>
                <span className="text-sm text-muted-foreground">Vol: {crypto.volume}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Card */}
        <div className="mt-12 p-8 rounded-2xl bg-primary shadow-glow-strong animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">Pronto para começar?</h3>
              <p className="text-primary-foreground/80">Crie sua conta gratuita e comece a investir em minutos.</p>
            </div>
            <button className="px-8 py-4 rounded-full bg-primary-foreground text-primary font-bold uppercase hover:bg-foreground transition-colors duration-300">
              Criar Conta Grátis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSection;
