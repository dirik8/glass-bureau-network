
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'bureau';
  interactive?: boolean;
}

export const LiquidGlassCard: React.FC<LiquidGlassCardProps> = ({
  children,
  className,
  variant = 'default',
  interactive = true
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!interactive || !cardRef.current) return;

    const card = cardRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
    };
  }, [interactive]);

  return (
    <div
      ref={cardRef}
      className={cn(
        'glass-card',
        {
          'glass-dark': variant === 'dark',
          'bureau-gradient': variant === 'bureau',
          'cursor-glow': interactive,
        },
        className
      )}
    >
      {children}
    </div>
  );
};
