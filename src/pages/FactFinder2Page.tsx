import React, { useEffect, Children } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
interface FactFinder2PageProps {
  data: any;
  onUpdate: (updates: any) => void;
  onContinue: () => void;
  onBack: () => void;
}
export function FactFinder2Page({
  data,
  onUpdate,
  onContinue,
  onBack
}: FactFinder2PageProps) {
  // Auto-populate default values on mount if not already set
  useEffect(() => {
    if (!data.cms) {
      onUpdate({
        cms: 'WordPress'
      });
    }
    if (!data.industry) {
      onUpdate({
        industry: 'Plumbing'
      });
    }
    if (!data.postcode) {
      onUpdate({
        postcode: 'E1 7DB'
      });
    }
  }, []);
  const cmsList = ['WordPress', 'Shopify', 'Wix', 'Squarespace', 'Webflow', 'Drupal', 'Joomla', 'Magento', 'Custom Built', 'Other'];
  const industries = ['Plumbing', 'Electrical', 'HVAC', 'Roofing', 'Construction', 'Landscaping', 'Cleaning Services', 'Legal Services', 'Accounting', 'Real Estate', 'Healthcare', 'Dental', 'Veterinary', 'Automotive', 'Restaurant', 'Retail', 'E-commerce', 'Marketing Agency', 'IT Services', 'Other'];
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
  return <div className="min-h-screen p-6 flex flex-col">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header + Back button + Progress */}
        <div className="flex items-center justify-between mb-8">
          <button onClick={onBack} className="text-deep-blue opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            Back
          </button>

          <div className="flex-1 flex justify-center">
            <ProgressBar currentStep={3} totalSteps={9} />
          </div>

          <div className="w-20"></div>
        </div>

        {/* Title stays at top */}
        <motion.h2 initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-4xl font-bold text-deep-blue mb-32 text-center">
          Business Details
        </motion.h2>

        {/* Vertically centered content */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* CMS Card */}
            <motion.div variants={cardVariants}>
              <Card>
                <h3 className="font-bold text-lg mb-4 text-deep-blue">
                  Content Management System
                </h3>
                <select value={data.cms || 'WordPress'} onChange={e => onUpdate({
                cms: e.target.value
              })} className="w-full px-4 py-3 rounded-lg border-2 border-deep-blue border-opacity-20 bg-white text-deep-blue focus:outline-none focus:border-accent-blue transition-colors duration-300">
                  {cmsList.map(cms => <option key={cms} value={cms}>
                      {cms}
                    </option>)}
                </select>
              </Card>
            </motion.div>

            {/* Industry Card */}
            <motion.div variants={cardVariants}>
              <Card>
                <h3 className="font-bold text-lg mb-4 text-deep-blue">Industry</h3>
                <select value={data.industry || 'Plumbing'} onChange={e => onUpdate({
                industry: e.target.value
              })} className="w-full px-4 py-3 rounded-lg border-2 border-deep-blue border-opacity-20 bg-white text-deep-blue focus:outline-none focus:border-accent-blue transition-colors duration-300">
                  {industries.map(industry => <option key={industry} value={industry}>
                      {industry}
                    </option>)}
                </select>
              </Card>
            </motion.div>

            {/* Postcode Card */}
            <motion.div variants={cardVariants} className="md:col-span-2">
              <Card>
                <h3 className="font-bold text-lg mb-4 text-deep-blue">Location</h3>
                <Input label="What is your business postcode?" value={data.postcode || 'E1 7DB'} onChange={value => onUpdate({
                postcode: value
              })} placeholder="e.g., E1 7DB" />
              </Card>
            </motion.div>
          </motion.div>

          {/* Continue Button */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.8,
          duration: 0.6
        }} className="flex justify-center mt-24">
            <Button onClick={onContinue}>Continue</Button>
          </motion.div>
        </div>
      </div>
    </div>;
}