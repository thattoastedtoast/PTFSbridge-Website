import React from 'react';

export const BRAND_LIME = '#7DD35A';
export const BRAND_GREEN = '#3fb548';
export const BRAND_EMERALD = '#087F52';
export const BRAND_FOREST = '#0b1a0d';

interface LogoProps {
  className?: string;
  size?: number;
  withText?: boolean;
  textSize?: string;
  textColor?: string;
  variant?: 'mark' | 'badge';
  rounded?: string;
  hasBorder?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 40,
  withText = true,
  textSize = 'text-2xl',
  textColor = 'text-white',
  variant = 'badge',
  rounded = 'rounded-2xl',
  hasBorder = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 shrink-0 ${className}`}>
      {/* Authentic Imgur logo image without borders as requested */}
      <img
        src="/logo-256.png"
        srcSet="/logo-256.png 256w, /logo.png 1080w"
        sizes={`${size}px`}
        alt="PTFSbridge Logo"
        width={size}
        height={size}
        referrerPolicy="no-referrer"
        className={`shrink-0 aspect-square select-none object-cover transition-transform duration-300 group-hover:scale-105 ${rounded} ${
          hasBorder ? 'ring-2 ring-white/75 border border-white/40 shadow-md' : ''
        }`}
        style={{ width: `${size}px`, height: `${size}px` }}
      />

      {/* Wordmark with clear contrast */}
      {withText && (
        <span
          className={`font-bold tracking-[-0.06em] leading-none ${textSize} ${textColor} drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] transition-opacity duration-200 group-hover:opacity-90`}
        >
          PTFSbridge
        </span>
      )}
    </div>
  );
};
