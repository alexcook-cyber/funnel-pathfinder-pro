import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
interface FactFinderPageProps {
  data: any;
  onUpdate: (updates: any) => void;
  onContinue: () => void;
  onBack: () => void;
}
export function FactFinderPage({
  data,
  onUpdate,
  onContinue,
  onBack
}: FactFinderPageProps) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentYear = new Date().getFullYear();
  const years = Array.from({
    length: 10
  }, (_, i) => currentYear - i);
  const businessOptions = ['None', 'Social media', 'PPC', 'Word of mouth', 'Other'];
  const toggleBusinessGeneration = (option: string) => {
    const current = data.businessGeneration || [];
    if (current.includes(option)) {
      onUpdate({
        businessGeneration: current.filter((o: string) => o !== option)
      });
    } else {
      onUpdate({
        businessGeneration: [...current, option]
      });
    }
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return <div className="min-h-screen p-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button onClick={onBack} className="text-deep-blue opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            Back
          </button>

          <div className="flex-1 flex justify-center">
            <ProgressBar currentStep={2} totalSteps={9} />
          </div>

          <div className="w-20"></div>
        </div>

        <motion.h2 initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-4xl font-bold text-deep-blue mb-8 text-center">
          Fact Finder
        </motion.h2>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div variants={cardVariants} className="h-full">
            <Card className="h-full">
              <h3 className="font-bold text-lg mb-4 text-deep-blue">
                Trading Date
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-deep-blue">
                    First Month
                  </label>
                  <select value={data.tradingMonth} onChange={e => onUpdate({
                  tradingMonth: e.target.value
                })} className="w-full px-4 py-3 rounded-lg border-2 border-deep-blue border-opacity-20 bg-white text-deep-blue focus:outline-none focus:border-accent-blue transition-colors duration-300">
                    <option value="">Select month</option>
                    {months.map(month => <option key={month} value={month}>
                        {month}
                      </option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-deep-blue">
                    First Year
                  </label>
                  <input type="string" value={data.tradingYear || ''} onChange={e => onUpdate({
                  tradingYear: e.target.value
                })} placeholder="Enter year" className="w-full px-4 py-3 rounded-lg border-2 border-deep-blue border-opacity-20 bg-white text-deep-blue focus:outline-none focus:border-accent-blue transition-colors duration-300" />
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants} className="h-full">
            <Card className="h-full">
              <h3 className="font-bold text-lg mb-4 text-deep-blue">
                Business Generation
              </h3>
              <p className="text-sm text-deep-blue opacity-70 mb-4">
                How do you currently generate business?
              </p>
              <div className="space-y-3">
                {businessOptions.map(option => <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={(data.businessGeneration || []).includes(option)} onChange={() => toggleBusinessGeneration(option)} className="w-5 h-5 rounded border-2 border-deep-blue text-accent-blue focus:ring-accent-blue" />
                    <span className="text-deep-blue">{option}</span>
                  </label>)}
                {(data.businessGeneration || []).includes('Other') && <Input label="Please specify" value={data.businessGenerationOther} onChange={value => onUpdate({
                businessGenerationOther: value
              })} placeholder="Enter details" />}
              </div>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants} className="h-full">
            <Card className="h-full">
              <h3 className="font-bold text-lg mb-4 text-deep-blue">
                Monthly Leads
              </h3>
              <Input label="How many monthly leads do you get on average?" value={data.monthlyLeads} onChange={value => onUpdate({
              monthlyLeads: value
            })} placeholder="e.g., 50" type="number" />
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card>
              <h3 className="font-bold text-lg mb-4 text-deep-blue">
                Google My Business
              </h3>
              <p className="text-sm text-deep-blue opacity-70 mb-4">
                Do you have a GMB?
              </p>
              <div className="space-y-3">
                {['Yes', 'No'].map(option => <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="gmb" checked={data.hasGMB === option} onChange={() => onUpdate({
                  hasGMB: option
                })} className="w-5 h-5 border-2 border-deep-blue text-accent-blue focus:ring-accent-blue" />
                    <span className="text-deep-blue">{option}</span>
                  </label>)}
              </div>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.8,
        duration: 0.6
      }} className="flex justify-center">
          <Button onClick={onContinue}>Continue</Button>
        </motion.div>
      </div>
    </div>;
}