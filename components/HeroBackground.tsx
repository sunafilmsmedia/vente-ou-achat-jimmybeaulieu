// Fond décoratif du hero — Jimmy Beaulieu (RE/MAX Royal Jordan, Lachine,
// Montréal). Pas de photo du secteur pour l'instant : un dégradé marine
// (couleur exacte de sa bannière officielle), surmonté d'une silhouette SVG
// générique d'horizon urbain, très discrète, sous le dégradé — à remplacer
// par une vraie photo du secteur (ex. le canal de Lachine) dès qu'on en a une.
export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-x-0 bottom-0 h-[42vh] min-h-[280px] opacity-[0.16]"
        aria-hidden
      >
        <svg
          viewBox="0 0 1200 260"
          preserveAspectRatio="xMidYMax slice"
          className="w-full h-full"
          fill="none"
        >
          {/* Horizon d'immeubles génériques */}
          <g fill="#ffffff">
            <rect x="0" y="150" width="60" height="110" />
            <rect x="70" y="110" width="50" height="150" />
            <rect x="130" y="170" width="45" height="90" />
            <rect x="185" y="90" width="55" height="170" />
            <rect x="250" y="140" width="40" height="120" />
            <rect x="300" y="60" width="60" height="200" />
            <rect x="370" y="120" width="45" height="140" />
            <rect x="425" y="20" width="18" height="240" />
            <polygon points="434,20 428,0 440,0" />
            <rect x="455" y="100" width="50" height="160" />
            <rect x="515" y="150" width="40" height="110" />
            <rect x="565" y="80" width="55" height="180" />
            <rect x="630" y="130" width="45" height="130" />
            <rect x="685" y="60" width="60" height="200" />
            <rect x="755" y="150" width="40" height="110" />
            <rect x="805" y="100" width="50" height="160" />
            <rect x="865" y="170" width="45" height="90" />
            <rect x="920" y="110" width="55" height="150" />
            <rect x="985" y="150" width="40" height="110" />
            <rect x="1035" y="90" width="50" height="170" />
            <rect x="1095" y="140" width="45" height="120" />
            <rect x="1150" y="170" width="50" height="90" />
          </g>
        </svg>
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% -5%, #1a2458 0%, #0f173d 45%, #050821 100%)",
        }}
      />
      <div className="absolute -top-32 -right-24 w-[32rem] h-[32rem] rounded-full bg-[var(--color-gold)]/[0.14] blur-3xl" />
      <div className="absolute top-1/3 -left-32 w-[28rem] h-[28rem] rounded-full bg-[var(--color-gold)]/[0.1] blur-3xl" />
    </div>
  );
}
