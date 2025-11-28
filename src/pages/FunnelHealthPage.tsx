import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
import { FunnelVisualization } from '../components/FunnelVisualization';
interface FunnelHealthPageProps {
  data: any;
  onContinue: () => void;
  onBack: () => void;
}
function calculateScore(data: any) {
  let trafficScore = 0;
  let conversionScore = 0;
  let leadScore = 0;

  // Traffic scoring
  if (data.avgCTR === '≥5%') trafficScore += 35;else if (data.avgCTR === '3–5%') trafficScore += 25;else if (data.avgCTR === '<2%') trafficScore += 10;
  if (data.trackingConversions === 'Both') trafficScore += 35;else if (data.trackingConversions === 'Form fills' || data.trackingConversions === 'Calls') trafficScore += 20;
  if (data.avgCPC === '<£0.50') trafficScore += 30;else if (data.avgCPC === '£0.50–£3.00') trafficScore += 20;else if (data.avgCPC === '≥£3.00') trafficScore += 5;

  // Conversion scoring
  if (data.costPerAcquisition === '<£10') conversionScore += 25;else if (data.costPerAcquisition === '£10–£50') conversionScore += 15;else if (data.costPerAcquisition === '≥£50') conversionScore += 5;
  if (data.conversionRate === '≥5%') conversionScore += 30;else if (data.conversionRate === '2–5%') conversionScore += 20;else if (data.conversionRate === '1–2%') conversionScore += 10;
  if (data.ctaVisibility === 'Yes — both mobile & desktop') conversionScore += 25;else if (data.ctaVisibility?.includes('Yes')) conversionScore += 15;
  if (data.servicePages === 'Yes — all services') conversionScore += 20;else if (data.servicePages === 'Yes — some') conversionScore += 10;

  // Lead management scoring
  if (data.leadManagementSystem === 'Dedicated admin/assistant') leadScore += 50;else if (data.leadManagementSystem === 'Answer every call') leadScore += 35;else if (data.leadManagementSystem === 'Organised chaos') leadScore += 15;
  if (data.responseTime === 'Same hour') leadScore += 50;else if (data.responseTime === 'Same day') leadScore += 30;else if (data.responseTime === 'Same week') leadScore += 15;
  const overallScore = Math.round((trafficScore + conversionScore + leadScore) / 3);
  return {
    overallScore,
    trafficScore,
    conversionScore,
    leadScore
  };
}
export function FunnelHealthPage({
  data,
  onContinue,
  onBack
}: FunnelHealthPageProps) {
  const scores = calculateScore(data);
  const getScoreStatus = (score: number, title: string) => {
    if (title === 'Traffic') {
      if (score >= 70) return {
        label: 'Good',
        message: 'Your ads are performing well with strong CTR and tracking.',
        color: '#10b981'
      };
      if (score >= 40) return {
        label: 'Okay',
        message: 'Room for improvement in ad performance and tracking.',
        color: '#f59e0b'
      };
      return {
        label: 'Needs Work',
        message: 'Your traffic quality and tracking need attention.',
        color: '#ef4444'
      };
    }
    if (title === 'Conversions') {
      if (score >= 70) return {
        label: 'Good',
        message: 'Strong conversion rate and effective CTAs are driving results.',
        color: '#10b981'
      };
      if (score >= 40) return {
        label: 'Okay',
        message: 'Decent conversion setup but could be optimized further.',
        color: '#f59e0b'
      };
      return {
        label: 'Needs Work',
        message: 'Conversion rate and CTAs need significant improvement.',
        color: '#ef4444'
      };
    }
    // Leads
    if (score >= 70) return {
      label: 'Good',
      message: 'Excellent lead management with fast response times.',
      color: '#10b981'
    };
    if (score >= 40) return {
      label: 'Okay',
      message: 'Lead management is functional but could be faster.',
      color: '#f59e0b'
    };
    return {
      label: 'Needs Work',
      message: 'Lead response time and management need improvement.',
      color: '#ef4444'
    };
  };
  const ScoreCard = ({
    title,
    score,
    color
  }: {
    title: string;
    score: number;
    color: string;
  }) => {
    const status = getScoreStatus(score, title);
    return <Card className="p-3 flex flex-col">
        {/* Title at top center */}
        <h3 className="text-xs font-bold text-deep-blue mb-3 text-center">{title}</h3>

        {/* Horizontal layout for circle + details */}
        <div className="flex items-center gap-3">
          {/* Left side - Circle and score */}
          <div className="flex-shrink-0">
            <motion.div initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            duration: 0.5,
            type: 'spring'
          }} className="relative w-12 h-12">
              <svg className="transform -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#173340" strokeWidth="6" opacity="0.1" />
                <motion.circle cx="60" cy="60" r="54" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" initial={{
                strokeDasharray: '339.292',
                strokeDashoffset: '339.292'
              }} animate={{
                strokeDashoffset: 339.292 - 339.292 * score / 100
              }} transition={{
                duration: 1,
                delay: 0.2
              }} />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 0.5
              }} className="text-sm font-bold text-deep-blue">
                  {score}
                </motion.span>
              </div>
            </motion.div>
            <div className="text-xs text-deep-blue opacity-70 text-center">/ 100</div>
          </div>

          {/* Right side - Status details */}
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold mb-1" style={{
            color: status.color
          }}>
              {status.label}
            </div>
            <div className="text-xs text-deep-blue opacity-70 leading-relaxed">
              {status.message}
            </div>
          </div>
        </div>
      </Card>;
  };
  return <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl mx-auto w-full">
        {/* Back Button and Progress Bar on same line */}
        <div className="flex items-center justify-between mb-8">
          <button onClick={onBack} className="text-deep-blue opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            Back
          </button>

          <div className="flex-1 flex justify-center">
            <ProgressBar currentStep={5} totalSteps={10} />
          </div>

          <div className="w-20"></div>
        </div>

        <motion.h2 initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-2xl font-bold text-deep-blue mb-6 text-center">
          Your Funnel Health
        </motion.h2>

        <div className="grid grid-cols-[0.8fr_0.8fr_1.4fr] gap-6 mb-6">
          {/* Overall Health - Left Column, Smaller */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6
        }}>
            <Card className="text-center bg-gradient-to-br from-[#0a24e3] to-[#081b9f] text-white p-6 h-full flex flex-col justify-center">
              <h3 className="text-xs font-bold mb-3">Overall Health</h3>
              <motion.div initial={{
              scale: 0
            }} animate={{
              scale: 1
            }} transition={{
              duration: 0.7,
              type: 'spring'
            }} className="text-5xl font-bold mb-2">
                {scores.overallScore}
              </motion.div>
              <div className="text-xs opacity-90 mb-4">/ 100</div>
              <div className="text-xs opacity-80 leading-relaxed">
                Based on your traffic, conversion, and lead management
                performance
              </div>
            </Card>
          </motion.div>

          {/* Middle Column - Score Cards Stacked Vertically, Smaller */}
          <div className="flex flex-col gap-6">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }}>
              <ScoreCard title="Traffic" score={scores.trafficScore} color="#0a24e3" />
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }}>
              <ScoreCard title="Conversions" score={scores.conversionScore} color="#e3664f" />
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }}>
              <ScoreCard title="Leads" score={scores.leadScore} color="#ffcd63" />
            </motion.div>
          </div>

          {/* Right Column - Funnel (larger) */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.5
        }} className="flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <FunnelVisualization trafficScore={scores.trafficScore} conversionScore={scores.conversionScore} leadScore={scores.leadScore} />
            </div>
          </motion.div>
        </div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.6
      }} className="flex justify-center">
          <Button onClick={onContinue}>Continue</Button>
        </motion.div>
      </div>
    </div>;
}