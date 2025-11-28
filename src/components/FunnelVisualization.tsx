import React from 'react';
import { motion } from 'framer-motion';
interface FunnelVisualizationProps {
  trafficScore: number;
  conversionScore: number;
  leadScore: number;
}
export function FunnelVisualization({
  trafficScore,
  conversionScore,
  leadScore
}: FunnelVisualizationProps) {
  return <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 180" className="w-full h-full">
        <defs>
          {/* Gradients for each segment */}
          <linearGradient id="trafficGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0a24e3" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0a24e3" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="conversionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e3664f" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#e3664f" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="leadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffcd63" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffcd63" stopOpacity="0.6" />
          </linearGradient>

          {/* Clip paths for each segment based on score */}
          <clipPath id="trafficClip">
            <rect x="20" y={30 + 40 * (100 - trafficScore) / 100} width="160" height={40 * trafficScore / 100} />
          </clipPath>
          <clipPath id="conversionClip">
            <rect x="40" y={70 + 40 * (100 - conversionScore) / 100} width="120" height={40 * conversionScore / 100} />
          </clipPath>
          <clipPath id="leadClip">
            <rect x="60" y={110 + 40 * (100 - leadScore) / 100} width="80" height={40 * leadScore / 100} />
          </clipPath>
        </defs>

        {/* Funnel outlines removed */}

        {/* Traffic (Top) - Blue gradient */}
        <g clipPath="url(#trafficClip)">
          <motion.path d="M 20 30 L 180 30 L 160 70 L 40 70 Z" fill="url(#trafficGradient)" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.2,
          duration: 0.8
        }} />
        </g>

        {/* Conversions (Middle) - Orange gradient */}
        <g clipPath="url(#conversionClip)">
          <motion.path d="M 40 70 L 160 70 L 140 110 L 60 110 Z" fill="url(#conversionGradient)" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.4,
          duration: 0.8
        }} />
        </g>

        {/* Lead Management (Bottom) - Yellow gradient */}
        <g clipPath="url(#leadClip)">
          <motion.path d="M 60 110 L 140 110 L 120 150 L 80 150 Z" fill="url(#leadGradient)" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.6,
          duration: 0.8
        }} />
        </g>
      </svg>
    </div>;
}