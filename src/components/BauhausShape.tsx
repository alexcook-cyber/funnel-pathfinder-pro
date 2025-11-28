import React from 'react';
import { motion } from 'framer-motion';
interface BauhausShapeProps {
  type: 'circle' | 'square' | 'triangle';
  color: 'blue' | 'coral';
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
}
export function BauhausShape({
  type,
  color,
  size,
  top,
  left,
  right,
  bottom,
  delay = 0
}: BauhausShapeProps) {
  const colorClass = color === 'blue' ? 'fill-accent-blue' : 'fill-accent-coral';
  const position = {
    top,
    left,
    right,
    bottom
  };
  const floatAnimation = {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
      delay
    }
  };
  return <motion.div className="absolute opacity-10 pointer-events-none" style={{
    ...position,
    width: size,
    height: size
  }} animate={floatAnimation}>
      {type === 'circle' && <svg viewBox="0 0 100 100" className={colorClass}>
          <circle cx="50" cy="50" r="50" />
        </svg>}
      {type === 'square' && <svg viewBox="0 0 100 100" className={colorClass}>
          <rect width="100" height="100" />
        </svg>}
      {type === 'triangle' && <svg viewBox="0 0 100 100" className={colorClass}>
          <polygon points="50,0 100,100 0,100" />
        </svg>}
    </motion.div>;
}