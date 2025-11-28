import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
interface PreClosePageProps {
  data: any;
  onContinue: () => void;
  onBack: () => void;
}
export function PreClosePage({
  data,
  onContinue,
  onBack
}: PreClosePageProps) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const locations = [{
    name: 'UK',
    x: '48%',
    y: '40%'
  }, {
    name: 'Ireland',
    x: '45%',
    y: '42%'
  }, {
    name: 'US',
    x: '22%',
    y: '45%'
  }];
  return <div className="min-h-screen bg-cream flex items-center justify-center p-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Back Button and Progress Bar */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="text-deep-blue opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            Back
          </button>

          <div className="flex-1 flex justify-center">
            <ProgressBar currentStep={9} totalSteps={10} />
          </div>

          <div className="w-20"></div>
        </div>

        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="text-center mb-6">
          <h1 className="text-3xl font-bold text-deep-blue mb-1">
            About Add People
          </h1>
          <p className="text-sm text-deep-blue opacity-70">
            Your trusted partner in digital growth since 2002
          </p>
        </motion.div>

        {/* Three Cards on Top */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Stats Card */}
          <Card className="p-6">
            <h3 className="text-sm font-bold text-deep-blue mb-4 pb-2 border-b border-deep-blue/10">
              Our Track Record
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[{
              value: '20+',
              label: 'Years'
            }, {
              value: '5000+',
              label: 'Clients'
            }, {
              value: '3',
              label: 'Countries'
            }, {
              value: '100+',
              label: 'Specialists'
            }].map((stat, index) => <motion.div key={stat.label} initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.4,
              delay: 0.3 + index * 0.05
            }} className="text-center bg-cream rounded-lg p-3">
                  <div className="text-2xl font-bold text-accent-blue">
                    {stat.value}
                  </div>
                  <div className="text-xs text-deep-blue opacity-70">
                    {stat.label}
                  </div>
                </motion.div>)}
            </div>
          </Card>

          {/* Why Choose Us Card */}
          <Card className="p-6">
            <h3 className="text-sm font-bold text-deep-blue mb-4 pb-2 border-b border-deep-blue/10">
              Why Choose Us
            </h3>
            <div className="space-y-3">
              {[{
              icon: '✓',
              text: 'Proven track record',
              color: '#0a24e3'
            }, {
              icon: '✓',
              text: 'Transparent reporting',
              color: '#e3664f'
            }, {
              icon: '✓',
              text: 'Real human support',
              color: '#ffcd63'
            }, {
              icon: '✓',
              text: 'Data-driven results',
              color: '#0a24e3'
            }, {
              icon: '✓',
              text: 'Long-term partnerships',
              color: '#e3664f'
            }].map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -10
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.4,
              delay: 0.4 + index * 0.05
            }} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{
                backgroundColor: item.color
              }}>
                    {item.icon}
                  </div>
                  <span className="text-sm text-deep-blue opacity-80">
                    {item.text}
                  </span>
                </motion.div>)}
            </div>
          </Card>

          {/* Global Presence Card */}
          <Card className="p-6">
            <h3 className="text-sm font-bold text-deep-blue mb-4 pb-2 border-b border-deep-blue/10">
              Global Presence
            </h3>
            <div className="relative w-full h-32 bg-deep-blue bg-opacity-5 rounded-lg overflow-hidden mb-3">
              <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20">
                <path d="M 100 150 Q 200 100 300 150 T 500 150 T 700 150 T 900 150" stroke="#173340" strokeWidth="2" fill="none" />
                <path d="M 150 250 Q 250 200 350 250 T 550 250 T 750 250" stroke="#173340" strokeWidth="2" fill="none" />
                <path d="M 200 350 Q 300 300 400 350 T 600 350 T 800 350" stroke="#173340" strokeWidth="2" fill="none" />
              </svg>
              {locations.map((location, index) => <motion.div key={location.name} initial={{
              scale: 0
            }} animate={{
              scale: 1
            }} transition={{
              duration: 0.4,
              delay: 0.5 + index * 0.1,
              type: 'spring'
            }} className="absolute group cursor-pointer" style={{
              left: location.x,
              top: location.y
            }}>
                  <div className="w-3 h-3 rounded-full bg-accent-blue shadow-lg" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-white px-2 py-1 rounded shadow-xl whitespace-nowrap">
                      <div className="text-xs font-bold text-deep-blue">
                        {location.name}
                      </div>
                    </div>
                  </div>
                </motion.div>)}
            </div>
            <p className="text-xs text-deep-blue opacity-70 text-center">
              UK • Ireland • United States
            </p>
          </Card>
        </motion.div>

        {/* Reviews Card - Full Width Below */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }}>
          <Card className="p-6">
            <h3 className="text-sm font-bold text-deep-blue mb-4 text-center">
              Client Reviews
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[{
              text: 'Exceptional service and results that exceeded expectations',
              name: 'Sarah M.',
              business: 'Retail'
            }, {
              text: 'Professional team that truly understands digital marketing',
              name: 'James T.',
              business: 'Services'
            }, {
              text: 'Revenue has grown significantly since partnering',
              name: 'Lisa K.',
              business: 'E-commerce'
            }].map((review, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: 0.6 + index * 0.1
            }} className="bg-cream p-4 rounded-lg">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-accent-yellow text-sm">
                        ★
                      </span>)}
                  </div>
                  <p className="text-sm text-deep-blue opacity-80 mb-3 italic leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="text-xs text-deep-blue opacity-60">
                    <span className="font-semibold">{review.name}</span> •{' '}
                    {review.business}
                  </div>
                </motion.div>)}
            </div>
          </Card>
        </motion.div>

        {/* Continue Button */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.8
      }} className="flex justify-center mt-6">
          <Button onClick={onContinue}>View Pricing</Button>
        </motion.div>
      </div>
    </div>;
}