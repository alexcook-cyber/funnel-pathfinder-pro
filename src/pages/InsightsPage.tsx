import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
interface InsightsPageProps {
  data: any;
  onRestart: () => void;
}
function getInsights(data: any) {
  const insights = [];
  const priorities = [];
  // Traffic insights
  if (data.avgCTR === '≥5%' && data.trackingConversions === 'Both') {
    insights.push({
      title: 'Traffic Performing Well',
      description: 'Your traffic fundamentals are solid. Good visibility and tracking provide reliable data for optimization.'
    });
  } else {
    priorities.push({
      title: 'Improve Traffic Quality',
      description: 'Focus on improving CTR and implementing comprehensive conversion tracking to better understand user behavior.',
      actions: ['Set up conversion tracking for both form fills and calls', 'Optimize ad copy and targeting to improve CTR', 'Review and refine keyword strategy']
    });
  }
  // Conversion insights
  if (data.conversionRate === '≥5%' && data.ctaVisibility === 'Yes — both mobile & desktop') {
    insights.push({
      title: 'Strong Conversion Performance',
      description: 'Your website is effectively converting visitors with clear CTAs and good user experience.'
    });
  } else {
    priorities.push({
      title: 'Optimize Conversion Funnel',
      description: 'Your conversion rate shows room for improvement. Focus on CTA visibility and user experience.',
      actions: ['Ensure CTAs are prominent on both mobile and desktop', 'Create dedicated service pages for all offerings', 'Simplify forms and reduce friction points']
    });
  }
  // Lead management insights
  if (data.leadManagementSystem === 'Dedicated admin/assistant' && data.responseTime === 'Same hour') {
    insights.push({
      title: 'Excellent Lead Management',
      description: 'Your rapid response time and dedicated system maximize conversion of leads to customers.'
    });
  } else {
    priorities.push({
      title: 'Streamline Lead Response',
      description: 'Faster response times dramatically increase conversion rates. Aim for same-hour responses.',
      actions: ['Implement lead notification system', 'Set up automated acknowledgment messages', 'Consider dedicated admin support for lead handling']
    });
  }
  return {
    insights,
    priorities
  };
}
export function InsightsPage({
  data,
  onRestart
}: InsightsPageProps) {
  const {
    insights,
    priorities
  } = getInsights(data);
  return <div className="min-h-screen p-6 py-12">
      <div className="max-w-5xl mx-auto">
        <ProgressBar currentStep={5} totalSteps={5} />

        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-deep-blue mb-3">
            Your Insights & Next Steps
          </h2>
          <p className="text-xl text-deep-blue opacity-70">
            Here's what your results mean and where to focus
          </p>
        </motion.div>

        {insights.length > 0 && <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="mb-12">
            <h3 className="text-2xl font-bold text-deep-blue mb-6">
              What's Working Well
            </h3>
            <div className="space-y-4">
              {insights.map((insight, index) => <motion.div key={insight.title} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.3 + index * 0.1
          }}>
                  <Card className="border-l-4 border-accent-blue">
                    <h4 className="text-xl font-bold text-deep-blue mb-2">
                      {insight.title}
                    </h4>
                    <p className="text-deep-blue opacity-80">
                      {insight.description}
                    </p>
                  </Card>
                </motion.div>)}
            </div>
          </motion.div>}

        {priorities.length > 0 && <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }} className="mb-12">
            <h3 className="text-2xl font-bold text-deep-blue mb-6">
              Priority Focus Areas
            </h3>
            <div className="space-y-6">
              {priorities.map((priority, index) => <motion.div key={priority.title} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.5 + index * 0.1
          }}>
                  <Card className="border-l-4 border-accent-coral">
                    <h4 className="text-xl font-bold text-deep-blue mb-2">
                      {priority.title}
                    </h4>
                    <p className="text-deep-blue opacity-80 mb-4">
                      {priority.description}
                    </p>
                    <div className="bg-cream rounded-lg p-4">
                      <p className="text-sm font-semibold text-deep-blue mb-2">
                        Recommended Actions:
                      </p>
                      <ul className="space-y-2">
                        {priority.actions.map((action, i) => <li key={i} className="flex items-start gap-2 text-sm text-deep-blue opacity-80">
                            <span className="text-accent-coral mt-1">•</span>
                            <span>{action}</span>
                          </li>)}
                      </ul>
                    </div>
                  </Card>
                </motion.div>)}
            </div>
          </motion.div>}

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.8
      }} className="text-center">
          <Card className="bg-gradient-to-br from-deep-blue to-accent-blue text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Take Action?</h3>
            <p className="text-lg opacity-90 mb-6">
              Let's discuss how we can help you implement these improvements and
              grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" onClick={onRestart}>
                Start Over
              </Button>
              <button className="px-8 py-4 rounded-lg font-bold text-lg bg-white text-deep-blue hover:bg-opacity-90 transition-all">
                Schedule Consultation
              </button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>;
}