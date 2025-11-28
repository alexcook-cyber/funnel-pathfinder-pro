import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
interface OnboardingFormPageProps {
  data: any;
  onUpdate: (updates: any) => void;
  onSubmit: () => void;
  onBack: () => void;
}
export function OnboardingFormPage({
  data,
  onUpdate,
  onSubmit,
  onBack
}: OnboardingFormPageProps) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
  return <div className="min-h-screen bg-cream p-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Back Button and Progress Bar */}
        <div className="flex items-center justify-between mb-8">
          <button onClick={onBack} className="text-deep-blue opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            Back
          </button>

          <div className="flex-1 flex justify-center">
            <ProgressBar currentStep={11} totalSteps={11} />
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
        duration: 0.8
      }} className="text-center mb-8">
          <h1 className="text-4xl font-bold text-deep-blue mb-3">
            Required Information
          </h1>
          <p className="text-lg text-deep-blue opacity-70">
            Just a few more details to begin your campaign
          </p>
        </motion.div>

        <form onSubmit={handleSubmit}>
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
            {/* Two Forms Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Form 1: Sales Form */}
              <motion.div variants={cardVariants}>
                <Card className="p-6 h-full">
                  <h2 className="text-2xl font-bold text-deep-blue mb-6 pb-3 border-b border-deep-blue/10">
                    Sales Information
                  </h2>
                  <div className="space-y-4">
                    <Input label="Client Name" value={data.clientName || ''} onChange={value => onUpdate({
                    clientName: value
                  })} placeholder="Enter client name" required />
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-deep-blue">
                        Contract Selected
                      </label>
                      <select value={data.contractSelected || ''} onChange={e => onUpdate({
                      contractSelected: e.target.value
                    })} className="w-full px-4 py-3 rounded-lg border-2 border-deep-blue border-opacity-20 bg-white text-deep-blue focus:outline-none focus:border-accent-blue transition-colors duration-300" required>
                        <option value="">Select contract</option>
                        <option value="Local SEO - 6 Months">
                          Local SEO - 6 Months
                        </option>
                        <option value="Local SEO - 12 Months">
                          Local SEO - 12 Months
                        </option>
                        <option value="Local SEO & SmartSite - 6 Months">
                          Local SEO & SmartSite - 6 Months
                        </option>
                        <option value="Local SEO & SmartSite - 12 Months">
                          Local SEO & SmartSite - 12 Months
                        </option>
                      </select>
                    </div>
                    <Input label="Recommended Revenue (Rec Rev)" value={data.recRev || ''} onChange={value => onUpdate({
                    recRev: value
                  })} placeholder="e.g., £5,000" required />
                  </div>
                </Card>
              </motion.div>

              {/* Form 2: Website Login Details */}
              <motion.div variants={cardVariants}>
                <Card className="p-6 h-full">
                  <h2 className="text-2xl font-bold text-deep-blue mb-6 pb-3 border-b border-deep-blue/10">
                    Website Login Details
                  </h2>
                  <div className="space-y-4">
                    <Input label="Username" value={data.websiteUsername || ''} onChange={value => onUpdate({
                    websiteUsername: value
                  })} placeholder="Enter website username" required />
                    <Input label="Password" value={data.websitePassword || ''} onChange={value => onUpdate({
                    websitePassword: value
                  })} placeholder="Enter website password" type="password" required />
                    <Input label="Login Page URL" value={data.loginPageUrl || ''} onChange={value => onUpdate({
                    loginPageUrl: value
                  })} placeholder="e.g., https://example.com/wp-admin" required />
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Submit Button */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.8,
            duration: 0.6
          }} className="flex justify-center pt-4">
              <Button type="submit" fullWidth={false}>
                Complete Setup
              </Button>
            </motion.div>
          </motion.div>
        </form>
      </div>
    </div>;
}