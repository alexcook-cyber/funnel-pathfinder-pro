import React from 'react';
import { motion } from 'framer-motion';
interface ImpactChartProps {
  trafficImpact: number;
  conversionImpact: number;
  leadImpact: number;
}
export function ImpactChart({
  trafficImpact,
  conversionImpact,
  leadImpact
}: ImpactChartProps) {
  const maxImpact = Math.max(trafficImpact, conversionImpact, leadImpact);
  return <div className="space-y-3">
      {/* Traffic */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-semibold text-deep-blue">Traffic</span>
          <span className="text-xs font-bold text-accent-blue">
            +{trafficImpact}%
          </span>
        </div>
        <div className="h-2 bg-deep-blue bg-opacity-10 rounded-full overflow-hidden">
          <motion.div className="h-full bg-accent-blue rounded-full" initial={{
          width: 0
        }} animate={{
          width: `${trafficImpact / maxImpact * 100}%`
        }} transition={{
          duration: 1,
          delay: 0.2,
          ease: 'easeOut'
        }} />
        </div>
      </div>

      {/* Conversions */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-semibold text-deep-blue">
            Conversions
          </span>
          <span className="text-xs font-bold text-accent-coral">
            +{conversionImpact}%
          </span>
        </div>
        <div className="h-2 bg-deep-blue bg-opacity-10 rounded-full overflow-hidden">
          <motion.div className="h-full bg-accent-coral rounded-full" initial={{
          width: 0
        }} animate={{
          width: `${conversionImpact / maxImpact * 100}%`
        }} transition={{
          duration: 1,
          delay: 0.4,
          ease: 'easeOut'
        }} />
        </div>
      </div>

      {/* Lead Management */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-semibold text-deep-blue">
            Lead Management
          </span>
          <span className="text-xs font-bold text-accent-yellow">
            +{leadImpact}%
          </span>
        </div>
        <div className="h-2 bg-deep-blue bg-opacity-10 rounded-full overflow-hidden">
          <motion.div className="h-full bg-accent-yellow rounded-full" initial={{
          width: 0
        }} animate={{
          width: `${leadImpact / maxImpact * 100}%`
        }} transition={{
          duration: 1,
          delay: 0.6,
          ease: 'easeOut'
        }} />
        </div>
      </div>
    </div>;
}