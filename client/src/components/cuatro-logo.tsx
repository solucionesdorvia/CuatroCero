interface CuatroLogoProps {
  size?: 'sm' | 'md' | 'lg';
  orientation?: 'vertical' | 'horizontal';
  showSubtitle?: boolean;
}

export default function CuatroLogo({ size = 'md', orientation = 'vertical', showSubtitle = true }: CuatroLogoProps) {
  const iconSize = size === 'sm' ? 32 : size === 'md' ? 48 : 64;
  const titleSize = size === 'sm' ? 'text-lg' : size === 'md' ? 'text-2xl' : 'text-3xl';
  const subtitleSize = size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base';
  
  const LogoIcon = () => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left bracket */}
      <path
        d="M10 15 L10 45 L25 45 L25 55 L10 55 L10 85 L35 85 L35 70 L20 70 L20 30 L35 30 L35 15 Z"
        fill="hsl(75, 100%, 52%)"
      />
      {/* Right bracket */}
      <path
        d="M90 15 L90 45 L75 45 L75 55 L90 55 L90 85 L65 85 L65 70 L80 70 L80 30 L65 30 L65 15 Z"
        fill="hsl(75, 100%, 52%)"
      />
      {/* Center line */}
      <rect x="47" y="10" width="6" height="80" fill="white" />
      {/* Center circle */}
      <circle cx="50" cy="50" r="12" fill="none" stroke="white" strokeWidth="3" />
    </svg>
  );

  if (orientation === 'horizontal') {
    return (
      <div className="cuatro-logo-horizontal">
        <LogoIcon />
        <div className="cuatro-logo-text">
          <div className={`cuatro-logo-title ${titleSize}`}>CUATRO CERO</div>
          {showSubtitle && (
            <div className={`cuatro-logo-subtitle ${subtitleSize}`}>GESTIÓN DE EQUIPO</div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="cuatro-logo">
      <LogoIcon />
      <div className="cuatro-logo-text">
        <div className={`cuatro-logo-title ${titleSize}`}>CUATRO CERO</div>
        {showSubtitle && (
          <div className={`cuatro-logo-subtitle ${subtitleSize}`}>GESTIÓN DE EQUIPO</div>
        )}
      </div>
    </div>
  );
}