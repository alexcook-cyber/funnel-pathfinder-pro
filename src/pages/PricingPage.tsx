import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
interface PricingPageProps {
  data: any;
  onContinue: () => void;
  onBack: () => void;
}
export function PricingPage({
  data,
  onContinue,
  onBack
}: PricingPageProps) {
  const setupFee = 349.0;
  const monthlyFee = 229.0;
  const vat = 115.6;
  const totalFirstMonth = 693.6;
  const monthlyAfterVAT = 274.8;
  return <div className="min-h-screen bg-cream p-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button and Progress Bar on same line */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="text-deep-blue opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            Back
          </button>

          <div className="flex-1 flex justify-center">
            <ProgressBar currentStep={10} totalSteps={11} />
          </div>

          <div className="w-20"></div>
        </div>

        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="mb-6">
          <h1 className="text-3xl font-bold text-deep-blue mb-2">
            Your Recommended Path
          </h1>
          <p className="text-sm text-deep-blue opacity-70">
            Based on your business, goals, and eligibility, here is the path we
            recommend for growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:items-stretch">
          {/* Left Column: Primary Recommendation */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="flex">
            <Card className="p-6 border-4 border-accent-blue flex-1">
              <div className="mb-4">
                <span className="text-xs font-bold text-accent-blue uppercase tracking-wide">
                  PRIMARY RECOMMENDATION
                </span>
                <h2 className="text-2xl font-bold text-deep-blue mt-2">
                  Local SEO & SmartSite
                </h2>
                <p className="text-sm text-deep-blue opacity-70 mt-2 leading-relaxed">
                  Combine a dominant local presence on Google Maps with a
                  powerful website designed to convert local searchers into
                  loyal customers.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-base font-bold text-deep-blue mb-3">
                  Key Deliverables:
                </h3>
                <ul className="space-y-2">
                  {['All Local SEO features', 'All SmartSite features', 'Perfectly optimised local content', 'Best-practice technical SEO'].map((item, index) => <motion.li key={item} initial={{
                  opacity: 0,
                  x: -20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.4,
                  delay: 0.4 + index * 0.1
                }} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                          <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-sm text-deep-blue opacity-80">
                        {item}
                      </span>
                    </motion.li>)}
                </ul>
              </div>

              <div className="bg-accent-blue/5 p-4 rounded-lg">
                <h3 className="text-base font-bold text-deep-blue mb-2">
                  Why this path for you?
                </h3>
                <p className="text-xs text-deep-blue opacity-80 leading-relaxed">
                  Combining a dominant local SEO strategy with a new
                  high-performance SmartSite will maximize your visibility and
                  conversions.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Right Column: Pricing */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="flex">
            <Card className="p-6 bg-white flex-1">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-accent-blue mb-2">
                  Local SEO & SmartSite
                </h2>
                <ul className="space-y-1 text-xs text-deep-blue opacity-70">
                  <li>
                    • You have strong signals for appearing in the Google Map
                    Pack
                  </li>
                  <li>
                    • A new SmartSite is required for optimal performance and
                    tracking
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-bold text-deep-blue mb-3">
                  Transparent Pricing
                </h3>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button className="py-2 px-4 rounded-lg bg-cream text-deep-blue font-semibold text-sm">
                    6 Months
                  </button>
                  <button className="py-2 px-4 rounded-lg bg-accent-blue text-white font-semibold text-sm">
                    12 Months
                  </button>
                </div>

                <div className="bg-accent-yellow/10 p-3 rounded-lg mb-4 text-center">
                  <p className="text-xs font-semibold text-deep-blue">
                    You save £600.00 with a 12-month plan!
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center py-2 border-b border-deep-blue/10">
                    <span className="text-sm text-deep-blue">Setup Fee</span>
                    <span className="font-bold text-sm text-deep-blue">
                      £{setupFee.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-deep-blue/10">
                    <span className="text-sm text-deep-blue">Monthly Fee</span>
                    <span className="font-bold text-sm text-deep-blue">
                      £{monthlyFee.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-deep-blue/10">
                    <span className="text-sm text-deep-blue">VAT</span>
                    <span className="font-bold text-sm text-deep-blue">
                      £{vat.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="bg-deep-blue text-white p-4 rounded-lg mb-2">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-bold">
                      Total First Month
                    </span>
                    <span className="text-xl font-bold">
                      £{totalFirstMonth.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs opacity-70 mt-1 text-right">
                    (then £{monthlyAfterVAT.toFixed(2)}/month inc. VAT)
                  </p>
                </div>
              </div>

              <Button onClick={onContinue} fullWidth>
                Start My Campaign
              </Button>
              <p className="text-center text-xs text-deep-blue opacity-60 mt-2">
                You're just one step away from starting.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>;
}